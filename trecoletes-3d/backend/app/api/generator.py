import os
import re
import subprocess
import tempfile
import uuid
import json
from typing import List, Dict, Any
from fastapi import APIRouter, UploadFile, Form, BackgroundTasks, Request
from fastapi.responses import JSONResponse
from app.api._svg_normalize import normalize_svg_to_origin

router = APIRouter()

# /app/app/api/generator.py → sobe 3 níveis para chegar à raiz do container /app
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODELS_DIR = os.path.join(BASE_DIR, "models")
GENERATED_DIR = os.path.join(BASE_DIR, "static", "generated")


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
    base_height: float = Form(2.0),
    art_width: float = Form(70.0),
    art_height: float = Form(70.0),
    cutter_shape: str = Form("silhouette"),
    cutter_width: float = Form(80.0),
    cutter_height: float = Form(80.0)
):
    scad_path = os.path.join(MODELS_DIR, model_id, "model.scad")
    if not os.path.exists(scad_path):
        return JSONResponse(status_code=404, content={"error": "Model not found"})

    # Create a unique job directory inside generated
    job_id = str(uuid.uuid4())
    job_dir = os.path.join(GENERATED_DIR, job_id)
    os.makedirs(job_dir, exist_ok=True)

    # Save incoming SVGs to the job directory
    linhas_path = os.path.join(job_dir, "linhas.svg")
    svg_bytes = await linhas_svg.read()
    # DEBUG: print raw SVG header to inspect viewBox from Paper.js
    print(f"[DEBUG linhas.svg first 300]: {svg_bytes[:300].decode('utf-8','ignore')}", flush=True)
    svg_bytes = normalize_svg_viewbox(svg_bytes)  # shift viewBox origin to (0,0)
    svg_bytes = normalize_svg_to_origin(svg_bytes)  # shift PATH CONTENT to (0,0)
    print(f"[DEBUG linhas.svg after normalize first 400]: {svg_bytes[:400].decode('utf-8','ignore')}", flush=True)
    with open(linhas_path, "wb") as f:
        f.write(svg_bytes)

    # After normalize_svg_viewbox + normalize_svg_to_origin:
    #   - viewBox is "0 0 contentW contentH" (content size, not canvas size)
    #   - Path coordinates are shifted so bounding box starts at (0,0)
    #   - OpenSCAD import + resize([art_w, art_h]) => content at (0,0)->(art_w, art_h)
    #   - art_svg() in model.scad translates by [-art_w/2, -art_h/2] to centre at origin
    silhueta_path = os.path.join(job_dir, "silhueta.svg")
    with open(silhueta_path, "wb") as f:
        f.write(await silhueta_svg.read())

    # Lê os argumentos dinâmicos enviados pelo FormData
    form_data = await request.form()
    
    # Gera os argumentos do OpenSCAD
    # Passamos os caminhos absolutos dos SVGs para as variáveis do SCAD
    scad_variables = [
        "-D", f'svg_linhas_path="{linhas_path}"',
        "-D", f'svg_silhueta_path="{silhueta_path}"',
        "-D", f'base_height={base_height}',
        "-D", f'art_width={art_width}',
        "-D", f'art_height={art_height}',
        "-D", f'cutter_shape="{cutter_shape}"',
        "-D", f'cutter_width={cutter_width}',
        "-D", f'cutter_height={cutter_height}'
    ]

    # Injeta automaticamente qualquer parâmetro dinâmico extra vindo do config.json
    # Ignoramos chaves já processadas nativamente
    native_keys = {"linhas_svg", "silhueta_svg", "base_height", "art_width", "art_height", "cutter_shape", "cutter_width", "cutter_height"}
    for key, value in form_data.items():
        if key not in native_keys and isinstance(value, str):
            # Adiciona ao SCAD "-D key=value"
            scad_variables.extend(["-D", f'{key}={value}'])

    parts_to_render = ["carimbo_base", "carimbo_arte", "cortador"]
    generated_urls = {}

    for part in parts_to_render:
        output_filename = f"{model_id}_{part}.stl"
        output_path = os.path.join(job_dir, output_filename)
        
        cmd = [
            "openscad",
            "-o", output_path,
            *scad_variables,
            "-D", f'part="{part}"',
            scad_path
        ]
        
        try:
            # Run headless OpenSCAD in Docker
            process = subprocess.run(cmd, check=True, capture_output=True, text=True)
            generated_urls[part] = f"/static/generated/{job_id}/{output_filename}"
        except subprocess.CalledProcessError as e:
            return JSONResponse(status_code=500, content={
                "error": f"OpenSCAD Render failed for {part}",
                "details": e.stderr
            })

    return {"success": True, "job_id": job_id, "files": generated_urls}
