import hashlib
import os
import re
import shutil
import subprocess
import time
import json
import uuid
import zipfile
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

# ---------------------------------------------------------------------------
# Funções de geração de 3MF com metadados Bambu Studio
# ---------------------------------------------------------------------------

def _f3d(v: float) -> str:
    """Formata um float para coordenadas 3MF (7 dígitos significativos)."""
    return f"{v:.7g}"


def _xml_object_1_model(meshes: list) -> bytes:
    """Gera o conteúdo de 3D/Objects/object_1.model com todas as malhas."""
    out = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<model unit="millimeter" xml:lang="en-US"'
        ' xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"'
        ' xmlns:p="http://schemas.microsoft.com/3dmanufacturing/production/2015/06">',
        ' <metadata name="BambuStudio:3mfVersion">1</metadata>',
        ' <resources>',
    ]
    for obj_id, mesh in meshes:
        verts = mesh.vertices
        faces = mesh.faces
        out.append(f'  <object id="{obj_id}" type="model">')
        out.append('   <mesh>')
        out.append('    <vertices>')
        for v in verts:
            out.append(f'     <vertex x="{_f3d(v[0])}" y="{_f3d(v[1])}" z="{_f3d(v[2])}"/>')
        out.append('    </vertices>')
        out.append('    <triangles>')
        for f in faces:
            out.append(f'     <triangle v1="{f[0]}" v2="{f[1]}" v3="{f[2]}"/>')
        out.append('    </triangles>')
        out.append('   </mesh>')
        out.append('  </object>')
    out.append(' </resources>')
    out.append('</model>')
    return '\n'.join(out).encode('utf-8')


def _xml_3dmodel(part_cfgs: list) -> bytes:
    """Gera o conteúdo de 3D/3dmodel.model (estrutura de montagem + build)."""
    assembly_uuid = str(uuid.uuid4())
    build_uuid    = str(uuid.uuid4())
    item_uuid     = str(uuid.uuid4())
    out = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<model unit="millimeter" xml:lang="en-US"'
        ' xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"'
        ' xmlns:BambuStudio="http://schemas.bambulab.com/package/2021"'
        ' xmlns:p="http://schemas.microsoft.com/3dmanufacturing/production/2015/06"'
        ' requiredextensions="p">',
        ' <metadata name="Application">BambuStudio-02.05.00.64</metadata>',
        ' <metadata name="BambuStudio:3mfVersion">1</metadata>',
        ' <resources>',
        f'  <object id="4" p:UUID="{assembly_uuid}" type="model">',
        '   <components>',
    ]
    for cfg in part_cfgs:
        comp_uuid = str(uuid.uuid4())
        out.append(
            f'    <component p:path="/3D/Objects/object_1.model"'
            f' objectid="{cfg["object_id"]}" p:UUID="{comp_uuid}"/>'
        )
    out += [
        '   </components>',
        '  </object>',
        ' </resources>',
        f' <build p:UUID="{build_uuid}">',
        f'  <item objectid="4" p:UUID="{item_uuid}"'
        '  transform="1 0 0 0 1 0 0 0 1 0 0 0" printable="1"/>',
        ' </build>',
        '</model>',
    ]
    return '\n'.join(out).encode('utf-8')


def _xml_model_settings(part_cfgs: list, total_faces: int, model_id: str = "model") -> bytes:
    """Gera o conteúdo de Metadata/model_settings.config."""
    obj_extruder = part_cfgs[0]['extruder'] if part_cfgs else 1
    out = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<config>',
        '  <object id="4">',
        f'    <metadata key="name" value="{model_id}_all"/>',
        f'    <metadata key="extruder" value="{obj_extruder}"/>',
        f'    <metadata face_count="{total_faces}"/>',
    ]
    for cfg in part_cfgs:
        z_off = _f3d(cfg['z_offset'])
        matrix = f'1 0 0 0 0 1 0 0 0 0 1 {z_off} 0 0 0 1'
        src_z  = _f3d(cfg['source_offset_z'])
        out += [
            f'    <part id="{cfg["object_id"]}" subtype="normal_part">',
            f'      <metadata key="name" value="{cfg["display_name"]}"/>',
            f'      <metadata key="extruder" value="{cfg["extruder"]}"/>',
            f'      <metadata key="matrix" value="{matrix}"/>',
            f'      <metadata key="source_file" value="{model_id}_all.3mf"/>',
            f'      <metadata key="source_object_id" value="{cfg["object_id"] - 1}"/>',
            f'      <metadata key="source_volume_id" value="0"/>',
            f'      <metadata key="source_offset_x" value="0"/>',
            f'      <metadata key="source_offset_y" value="0"/>',
            f'      <metadata key="source_offset_z" value="{src_z}"/>',
            f'      <mesh_stat face_count="{cfg["face_count"]}"'
            '  edges_fixed="0" degenerate_facets="0"'
            '  facets_removed="0" facets_reversed="0" backwards_edges="0"/>',
            '    </part>',
        ]
    out += [
        '  </object>',
        '  <plate>',
        '    <metadata key="plater_id" value="1"/>',
        '    <metadata key="plater_name" value=""/>',
        '    <metadata key="locked" value="false"/>',
        '    <metadata key="filament_map_mode" value="Auto For Flush"/>',
        '    <metadata key="filament_maps" value="1 1 1 1 1"/>',
        '    <metadata key="filament_volume_maps" value="0 0 0 0 0"/>',
        '    <model_instance>',
        '      <metadata key="object_id" value="4"/>',
        '      <metadata key="instance_id" value="0"/>',
        '    </model_instance>',
        '  </plate>',
        '  <assemble>',
        '   <assemble_item object_id="4" instance_id="0"'
        '  transform="1 0 0 0 1 0 0 0 1 0 0 0" offset="0 0 0" />',
        '  </assemble>',
        '</config>',
    ]
    return '\n'.join(out).encode('utf-8')


def _pack_bambu_3mf(
    model_id: str,
    parts_to_render: list,
    job_dir: str,
    mf_filepath: str,
) -> bool:
    """
    Cria um 3MF com metadados completos do Bambu Studio se existir
    models/<model_id>/bambu_template/.
    Retorna True em caso de sucesso; False faz o chamador recorrer ao
    fallback via trimesh.
    """
    template_dir = os.path.join(MODELS_DIR, model_id, 'bambu_template')
    if not os.path.isdir(template_dir):
        return False

    parts_cfg_path = os.path.join(template_dir, 'bambu_parts_config.json')
    if not os.path.exists(parts_cfg_path):
        return False

    with open(parts_cfg_path, 'r', encoding='utf-8') as fh:
        bambu_cfg = json.load(fh)
    part_defs = {p['scad_name']: p for p in bambu_cfg['parts']}

    # --- Carrega malhas ---
    meshes_raw: dict = {}
    for part in parts_to_render:
        stl_path = os.path.join(job_dir, f'{model_id}_{part}.stl')
        if not os.path.exists(stl_path):
            print(f'[BAMBU] STL não encontrado: {stl_path}', flush=True)
            return False
        loaded = trimesh.load(stl_path)
        if isinstance(loaded, trimesh.Scene):
            mesh = trimesh.util.concatenate(list(loaded.geometry.values()))
        else:
            mesh = loaded
        meshes_raw[part] = mesh

    # --- Normaliza Z: apoia todo o conjunto no plano Z=0 ---
    global_z_min = min(float(m.bounds[0][2]) for m in meshes_raw.values())
    for m in meshes_raw.values():
        m.apply_translation([0.0, 0.0, -global_z_min])

    # --- Monta configurações por parte ---
    part_cfgs = []
    total_faces = 0
    for idx, part in enumerate(parts_to_render):
        mesh = meshes_raw[part]
        defn = part_defs.get(part, {})
        face_count = len(mesh.faces)
        total_faces += face_count
        part_cfgs.append({
            'object_id':      idx + 1,
            'scad_name':      part,
            'display_name':   defn.get('display_name', part),
            'extruder':       defn.get('extruder', 1),
            'face_count':     face_count,
            'z_offset':       0.0,
            'source_offset_z': float(mesh.bounds[0][2]),
            'mesh':           mesh,
        })

    # --- Gera XMLs dinâmicos ---
    obj1_xml     = _xml_object_1_model([(c['object_id'], c['mesh']) for c in part_cfgs])
    model3d_xml  = _xml_3dmodel(part_cfgs)
    settings_xml = _xml_model_settings(part_cfgs, total_faces, model_id)

    # --- Empacota o ZIP (.3mf) ---
    static_dir = os.path.join(template_dir, 'static')
    try:
        with zipfile.ZipFile(mf_filepath, 'w', zipfile.ZIP_DEFLATED) as zf:
            # Arquivos estáticos do template
            if os.path.isdir(static_dir):
                for root, _dirs, files in os.walk(static_dir):
                    for fname in files:
                        abs_path = os.path.join(root, fname)
                        arc_path = os.path.relpath(abs_path, static_dir).replace('\\', '/')
                        zf.write(abs_path, arc_path)
            # Arquivos dinâmicos (gerados por job)
            zf.writestr('3D/Objects/object_1.model', obj1_xml)
            zf.writestr('3D/3dmodel.model', model3d_xml)
            zf.writestr('Metadata/model_settings.config', settings_xml)
        print(f'[BAMBU] 3MF Bambu Studio gerado: {mf_filepath}', flush=True)
        return True
    except Exception as e:
        print(f'[BAMBU] Erro ao empacotar 3MF: {repr(e)}', flush=True)
        if os.path.exists(mf_filepath):
            os.remove(mf_filepath)
        return False


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

    # --- Monta 3MF: tenta Bambu Studio primeiro, cai no trimesh como fallback ---
    bambu_ok = _pack_bambu_3mf(model_id, parts_to_render, job_dir, mf_filepath)
    if bambu_ok:
        generated_urls["3mf"] = f"/static/generated/{job_id}/{mf_filename}"
    else:
        # Fallback: exporta via trimesh (sem metadados Bambu Studio)
        try:
            meshes = []
            color_map = {
                "carimbo_base": [100, 100, 255, 255],
                "carimbo_arte": [255, 100, 100, 255],
                "cortador":     [100, 255, 100, 255],
            }
            name_map = {
                "carimbo_base": "Base do Carimbo",
                "carimbo_arte": "Arte do Carimbo",
                "cortador":     "Cortador",
            }
            for part in parts_to_render:
                stl_path = os.path.join(job_dir, f"{model_id}_{part}.stl")
                if os.path.exists(stl_path):
                    loaded = trimesh.load(stl_path)
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
            print(f"[FALLBACK] Erro ao exportar 3MF via trimesh: {repr(e)}")

    return {"success": True, "job_id": job_id, "files": generated_urls}


@router.post("/generate_parametric/{model_id}")
async def generate_parametric_model(request: Request, model_id: str):
    """
    Endpoint genérico para modelos paramétricos (sem upload de SVG).
    Recebe apenas form data com os parâmetros do modelo.
    Se o config.json declarar output_format="3mf" e parts=[...],
    renderiza múltiplas partes em paralelo e monta um 3MF multicolor.
    Caso contrário, retorna um único STL.
    """
    scad_path = os.path.join(MODELS_DIR, model_id, "model.scad")
    if not os.path.exists(scad_path):
        return JSONResponse(status_code=404, content={"error": "Model not found"})

    # Lê config.json para identificar output_format e partes do modelo
    config_path = os.path.join(MODELS_DIR, model_id, "config.json")
    model_config = {}
    if os.path.exists(config_path):
        with open(config_path, "r", encoding="utf-8") as f:
            model_config = json.load(f)

    output_format = model_config.get("output_format", "stl")
    parts_to_render = model_config.get("parts")  # lista ou None

    form_data = await request.form()
    text_params = sorted(
        (k, v) for k, v in form_data.items()
        if isinstance(v, str)
    )

    # Hash determinístico para cache
    hasher = hashlib.md5()
    hasher.update(model_id.encode())
    for k, v in text_params:
        hasher.update(f"{k}={v}".encode())
    job_id = hasher.hexdigest()[:16]

    job_dir = os.path.join(GENERATED_DIR, job_id)
    font_path = os.path.join(MODELS_DIR, model_id)

    # ── Fluxo multipart 3MF ───────────────────────────────────────────────
    if output_format == "3mf" and parts_to_render:
        mf_filename = f"{model_id}_all.3mf"
        mf_filepath = os.path.join(job_dir, mf_filename)

        if os.path.exists(mf_filepath):
            print(f"[CACHE HIT parametric 3mf] job_id={job_id}", flush=True)
            cached_urls = {p: f"/static/generated/{job_id}/{model_id}_{p}.stl" for p in parts_to_render}
            cached_urls["3mf"] = f"/static/generated/{job_id}/{mf_filename}"
            return {"success": True, "job_id": job_id, "files": cached_urls}

        _cleanup_old_jobs()
        os.makedirs(job_dir, exist_ok=True)

        scad_args_base = []
        for key, value in text_params:
            scad_args_base.extend(["-D", _to_scad_assignment(key, value)])

        def render_part(part: str) -> tuple:
            output_filename = f"{model_id}_{part}.stl"
            output_path = os.path.join(job_dir, output_filename)
            if os.path.exists(output_path):
                return part, output_path
            cmd = [
                "openscad", "-o", output_path,
                *scad_args_base,
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
                return part, RuntimeError(repr(e))

        generated_urls = {}
        errors = {}
        with ThreadPoolExecutor(max_workers=len(parts_to_render)) as pool:
            futures = {pool.submit(render_part, p): p for p in parts_to_render}
            for future in as_completed(futures):
                part, result = future.result()
                if isinstance(result, Exception):
                    errors[part] = str(result)
                else:
                    generated_urls[part] = f"/static/generated/{job_id}/{model_id}_{part}.stl"

        if errors:
            print(f"[PARAMETRIC 3MF ERROR] {errors}", flush=True)
            return JSONResponse(status_code=500, content={"error": "OpenSCAD falhou", "details": errors})

        bambu_ok = _pack_bambu_3mf(model_id, parts_to_render, job_dir, mf_filepath)
        if bambu_ok:
            generated_urls["3mf"] = f"/static/generated/{job_id}/{mf_filename}"
        else:
            try:
                meshes = []
                for part in parts_to_render:
                    stl_path = os.path.join(job_dir, f"{model_id}_{part}.stl")
                    if os.path.exists(stl_path):
                        loaded = trimesh.load(stl_path)
                        mesh = (trimesh.util.concatenate(list(loaded.geometry.values()))
                                if isinstance(loaded, trimesh.Scene) else loaded)
                        meshes.append(mesh)
                if meshes:
                    trimesh.Scene(meshes).export(mf_filepath, file_type='3mf')
                    generated_urls["3mf"] = f"/static/generated/{job_id}/{mf_filename}"
            except Exception as e:
                print(f"[PARAMETRIC FALLBACK] Erro ao exportar 3MF via trimesh: {repr(e)}")

        return {"success": True, "job_id": job_id, "files": generated_urls}

    # ── Fluxo STL único (original) ────────────────────────────────────────
    output_filename = f"{model_id}.stl"
    output_path = os.path.join(job_dir, output_filename)

    if os.path.exists(output_path):
        print(f"[CACHE HIT parametric] job_id={job_id}", flush=True)
        return {
            "success": True,
            "job_id": job_id,
            "files": {"model": f"/static/generated/{job_id}/{output_filename}"},
        }

    _cleanup_old_jobs()
    os.makedirs(job_dir, exist_ok=True)

    scad_args = []
    for key, value in text_params:
        scad_args.extend(["-D", _to_scad_assignment(key, value)])

    cmd = ["openscad", "-o", output_path, *scad_args, scad_path]
    env = os.environ.copy()
    env["OPENSCAD_FONT_PATH"] = font_path

    try:
        result = subprocess.run(
            cmd, check=True, capture_output=True, text=True,
            env=env, timeout=OPENSCAD_TIMEOUT,
        )
        print(f"[PARAMETRIC] Gerado: {output_path}", flush=True)
    except subprocess.TimeoutExpired:
        return JSONResponse(
            status_code=500,
            content={"error": f"OpenSCAD timeout ({OPENSCAD_TIMEOUT}s)"},
        )
    except subprocess.CalledProcessError as e:
        print(f"[PARAMETRIC ERROR] {e.stderr}", flush=True)
        return JSONResponse(
            status_code=500,
            content={"error": "OpenSCAD falhou", "details": e.stderr},
        )
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": repr(e)})

    return {
        "success": True,
        "job_id": job_id,
        "files": {"model": f"/static/generated/{job_id}/{output_filename}"},
    }
