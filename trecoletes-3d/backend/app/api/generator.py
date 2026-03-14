import hashlib
import os
import re
import shutil
import subprocess
import time
import json
import trimesh
from concurrent.futures import ThreadPoolExecutor, as_completed
from fastapi import APIRouter, UploadFile, Form, Request
from fastapi.responses import JSONResponse
from app.api._svg_normalize import normalize_svg_to_origin

router = APIRouter()

# /app/app/api/generator.py → sobe 3 níveis para chegar à raiz do container /app
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODELS_DIR = os.path.join(BASE_DIR, "models")
GENERATED_DIR = os.path.join(BASE_DIR, "static", "generated")

OPENSCAD_TIMEOUT = 300  # segundos por parte
JOB_MAX_AGE_HOURS = 24


def _cleanup_old_jobs():
    """Remove diretórios de job com mais de JOB_MAX_AGE_HOURS horas."""
    if not os.path.isdir(GENERATED_DIR):
        return
    cutoff = time.time() - JOB_MAX_AGE_HOURS * 3600
    for entry in os.scandir(GENERATED_DIR):
        if entry.is_dir() and entry.stat().st_mtime < cutoff:
            try:
                shutil.rmtree(entry.path)
            except Exception:
                pass


def _to_scad_assignment(key: str, raw: str) -> str:
    """
    Converte um par key/value vindo do FormData em um argumento -D do OpenSCAD.
    Todos os valores chegam como string; detectamos o tipo pretendido:
      - "true" / "false"  → booleano SCAD
      - int/float parseável → número SCAD
      - "[...]"            → array SCAD (passado cru)
      - qualquer outra coisa → string SCAD com aspas escapadas
    """
    v = raw.strip()
    if v.lower() == "true":
        return f"{key}=true"
    if v.lower() == "false":
        return f"{key}=false"
    if v.startswith("[") and v.endswith("]"):
        return f"{key}={v}"
    try:
        int(v)
        return f"{key}={v}"
    except ValueError:
        pass
    try:
        float(v)
        return f"{key}={v}"
    except ValueError:
        pass
    escaped = v.replace('"', '\\"')
    return f'{key}="{escaped}"'


def normalize_svg_viewbox(svg_bytes: bytes) -> bytes:
    """
    Shift the SVG coordinate system so the viewBox starts at (0, 0).
    Without this, OpenSCAD's resize() may place the art offset from
    the origin, making centering impossible from within SCAD.

    Strategy:
      1. Parse the viewBox (x y w h).  If x==0 and y==0, return as-is.
      2. Update viewBox to '0 0 w h'.
      3. Wrap all SVG children in <g transform='translate(-x, -y)'>
         so coordinates become relative to the new origin.
    """
    try:
        text = svg_bytes.decode('utf-8', errors='replace')

        vb_match = re.search(r'viewBox=["\']([-\d\s.]+)["\']', text)
        if not vb_match:
            return svg_bytes

        parts = list(map(float, vb_match.group(1).split()))
        if len(parts) != 4:
            return svg_bytes

        vb_x, vb_y, vb_w, vb_h = parts
        if abs(vb_x) < 0.001 and abs(vb_y) < 0.001:
            return svg_bytes  # already at origin

        # Update viewBox to start at (0, 0)
        text = re.sub(
            r'viewBox=["\']([-\d\s.]+)["\']',
            f'viewBox="0 0 {vb_w} {vb_h}"',
            text, count=1
        )

        # Wrap children: insert <g translate> right after the opening <svg...> tag
        svg_tag_end = re.search(r'<svg\b[^>]*>', text)
        if svg_tag_end:
            insert_pos = svg_tag_end.end()
            g_open = f'<g transform="translate({-vb_x} {-vb_y})">'  # SVG uses space, not comma
            text = text[:insert_pos] + g_open + text[insert_pos:]
            # Close the group before </svg>
            text = text.rsplit('</svg>', 1)
            text = '</g></svg>'.join(text)

        return text.encode('utf-8')
    except Exception:
        return svg_bytes  # fallback seguro

@router.get("/models/{model_id}/config")
async def get_model_config(model_id: str):
    """
    Retorna o config.json do modelo para que o frontend possa desenhar os controles
    dinamicamente (Server-Driven UI).
    """
    config_path = os.path.join(MODELS_DIR, model_id, "config.json")
    if not os.path.exists(config_path):
        return JSONResponse(status_code=404, content={"error": "Configuração não encontrada"})
    
    with open(config_path, "r", encoding="utf-8") as f:
        config_data = json.load(f)
        
    return config_data

@router.post("/generate/{model_id}")
async def generate_model(
    request: Request,
    model_id: str,
    linhas_svg: UploadFile = Form(...),
    silhueta_svg: UploadFile = Form(...),
):
    scad_path = os.path.join(MODELS_DIR, model_id, "model.scad")
    if not os.path.exists(scad_path):
        return JSONResponse(status_code=404, content={"error": "Model not found"})

    # Lê os bytes dos SVGs e os parâmetros do form antes de qualquer I/O de disco,
    # para que o hash possa ser calculado antes de criar diretórios.
    linhas_bytes_raw = await linhas_svg.read()
    silhueta_bytes_raw = await silhueta_svg.read()
    form_data = await request.form()

    # Parâmetros de texto do form (exclui os campos de arquivo já lidos acima)
    file_keys = {"linhas_svg", "silhueta_svg"}
    text_params = sorted(
        (k, v) for k, v in form_data.items()
        if k not in file_keys and isinstance(v, str)
    )

    # Cache MD5: hash determinístico de tudo que compõe este job
    hasher = hashlib.md5()
    hasher.update(model_id.encode())
    hasher.update(linhas_bytes_raw)
    hasher.update(silhueta_bytes_raw)
    for k, v in text_params:
        hasher.update(f"{k}={v}".encode())
    job_id = hasher.hexdigest()[:16]

    job_dir = os.path.join(GENERATED_DIR, job_id)
    parts_to_render = ["carimbo_base", "carimbo_arte", "cortador"]
    mf_filename = f"{model_id}_all.3mf"
    mf_filepath = os.path.join(job_dir, mf_filename)

    # Cache hit: 3MF já existe para estes parâmetros exatos
    if os.path.exists(mf_filepath):
        print(f"[CACHE HIT] job_id={job_id}", flush=True)
        cached_urls = {p: f"/static/generated/{job_id}/{model_id}_{p}.stl" for p in parts_to_render}
        cached_urls["3mf"] = f"/static/generated/{job_id}/{mf_filename}"
        return {"success": True, "job_id": job_id, "files": cached_urls}

    # Cache miss: cria o diretório do job e processa
    _cleanup_old_jobs()
    os.makedirs(job_dir, exist_ok=True)

    # DEBUG: print raw SVG header to inspect viewBox from Paper.js
    print(f"[DEBUG linhas.svg first 300]: {linhas_bytes_raw[:300].decode('utf-8','ignore')}", flush=True)
    linhas_bytes = normalize_svg_viewbox(linhas_bytes_raw)
    linhas_bytes = normalize_svg_to_origin(linhas_bytes)
    print(f"[DEBUG linhas.svg after normalize first 400]: {linhas_bytes[:400].decode('utf-8','ignore')}", flush=True)

    linhas_path = os.path.join(job_dir, "linhas.svg")
    with open(linhas_path, "wb") as f:
        f.write(linhas_bytes)

    silhueta_path = os.path.join(job_dir, "silhueta.svg")
    with open(silhueta_path, "wb") as f:
        f.write(silhueta_bytes_raw)

    # Monta os argumentos -D base para o OpenSCAD (sem a parte — injetada por worker)
    scad_variables_base = [
        "-D", f'svg_linhas_path="{linhas_path}"',
        "-D", f'svg_silhueta_path="{silhueta_path}"',
    ]
    for key, value in text_params:
        scad_variables_base.extend(["-D", _to_scad_assignment(key, value)])

    font_path = os.path.join(MODELS_DIR, model_id)

    def render_part(part: str) -> tuple[str, str] | tuple[str, Exception]:
        """Renderiza uma parte via OpenSCAD. Retorna (part, output_path) ou (part, exceção)."""
        output_filename = f"{model_id}_{part}.stl"
        output_path = os.path.join(job_dir, output_filename)

        # Reutiliza STL existente (pode ocorrer quando o 3MF anterior falhou)
        if os.path.exists(output_path):
            return part, output_path

        cmd = [
            "openscad",
            "-o", output_path,
            *scad_variables_base,
            "-D", f'part="{part}"',
            scad_path,
        ]
        env = os.environ.copy()
        env["OPENSCAD_FONT_PATH"] = font_path
        try:
            subprocess.run(cmd, check=True, capture_output=True, text=True,
                           env=env, timeout=OPENSCAD_TIMEOUT)
            return part, output_path
        except subprocess.TimeoutExpired:
            return part, TimeoutError(f"OpenSCAD timeout ({OPENSCAD_TIMEOUT}s) na parte '{part}'")
        except subprocess.CalledProcessError as e:
            return part, RuntimeError(e.stderr)
        except Exception as e:
            return part, RuntimeError(f"Erro inesperado na parte '{part}': {repr(e)}")

    # Renderiza as 3 partes em paralelo
    generated_urls = {}
    errors = {}
    with ThreadPoolExecutor(max_workers=3) as pool:
        futures = {pool.submit(render_part, p): p for p in parts_to_render}
        for future in as_completed(futures):
            part, result = future.result()
            if isinstance(result, Exception):
                errors[part] = str(result)
            else:
                generated_urls[part] = f"/static/generated/{job_id}/{model_id}_{part}.stl"

    if errors:
        print(f"[ERROR] Falha na renderização: {errors}", flush=True)
        return JSONResponse(status_code=500, content={"error": "OpenSCAD falhou", "details": errors})

    # Generate proper Multi-Object 3MF
    try:
        meshes = []
        color_map = {
            "carimbo_base": [100, 100, 255, 255],
            "carimbo_arte": [255, 100, 100, 255],
            "cortador": [100, 255, 100, 255]
        }
        name_map = {
            "carimbo_base": "Base do Carimbo",
            "carimbo_arte": "Arte do Carimbo",
            "cortador": "Cortador"
        }
        
        for part in parts_to_render:
            stl_path = os.path.join(job_dir, f"{model_id}_{part}.stl")
            if os.path.exists(stl_path):
                loaded = trimesh.load(stl_path)
                # trimesh.load pode retornar Scene (multi-body) ou Trimesh
                if isinstance(loaded, trimesh.Scene):
                    mesh = trimesh.util.concatenate(list(loaded.geometry.values()))
                else:
                    mesh = loaded
                mesh.metadata['name'] = name_map.get(part, part)
                mesh.visual.face_colors = color_map.get(part, [200, 200, 200, 255])
                meshes.append(mesh)
                
        if meshes:
            scene = trimesh.Scene(meshes)
            scene.export(mf_filepath, file_type='3mf')
            generated_urls["3mf"] = f"/static/generated/{job_id}/{mf_filename}"
    except Exception as e:
        print(f"Error packing 3MF via trimesh: {repr(e)}")

    return {"success": True, "job_id": job_id, "files": generated_urls}
