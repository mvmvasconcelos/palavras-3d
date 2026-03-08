import os
import re
import subprocess
import tempfile
import uuid
from typing import List, Dict, Any
from fastapi import APIRouter, UploadFile, Form, BackgroundTasks
from fastapi.responses import JSONResponse

router = APIRouter()

# /app/app/api/generator.py → go up 3 levels to reach container root /app
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODELS_DIR = os.path.join(BASE_DIR, "models")
GENERATED_DIR = os.path.join(BASE_DIR, "static", "generated")

@router.post("/generate/{model_id}")
async def generate_model(
    model_id: str,
    linhas_svg: UploadFile = Form(...),
    silhueta_svg: UploadFile = Form(...),
    wall_thickness: float = Form(1.2),
    base_height: float = Form(2.0),
    brim_width: float = Form(3.0),
    folga: float = Form(1.0),
    art_width: float = Form(70.0),
    art_height: float = Form(70.0),
    line_offset: float = Form(0.0),
    silhouette_exp: float = Form(4.0),
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
    with open(linhas_path, "wb") as f:
        f.write(svg_bytes)

    # Parse the SVG viewBox to find the true content center.
    # Paper.js exports with bounds='content', so viewBox = "x y w h" where
    # x,y are the actual coordinate origin of the content (not necessarily 0,0).
    # OpenSCAD's resize() scales around (0,0), so the center in SCAD space is:
    #   center_x = (x + w/2) * (art_width  / w)
    #   center_y = (y + h/2) * (art_height / h)
    art_center_x = art_width  / 2.0  # fallback
    art_center_y = art_height / 2.0  # fallback
    try:
        svg_text = svg_bytes.decode('utf-8', errors='ignore')
        vb_match = re.search(r'viewBox=["\']([\d\s.\-]+)["\']', svg_text)
        if vb_match:
            vb = list(map(float, vb_match.group(1).split()))
            if len(vb) == 4:
                vb_x, vb_y, vb_w, vb_h = vb
                if vb_w > 0 and vb_h > 0:
                    art_center_x = (vb_x + vb_w / 2.0) * (art_width  / vb_w)
                    art_center_y = (vb_y + vb_h / 2.0) * (art_height / vb_h)
    except Exception:
        pass  # keep fallback

    silhueta_path = os.path.join(job_dir, "silhueta.svg")
    with open(silhueta_path, "wb") as f:
        f.write(await silhueta_svg.read())

    # Generate the OpenSCAD command arguments
    # We pass the absolute paths to the SVGs into the SCAD variables
    scad_variables = [
        "-D", f'svg_linhas_path="{linhas_path}"',
        "-D", f'svg_silhueta_path="{silhueta_path}"',
        "-D", f'wall_thickness={wall_thickness}',
        "-D", f'base_height={base_height}',
        "-D", f'brim_width={brim_width}',
        "-D", f'folga={folga}',
        "-D", f'art_width={art_width}',
        "-D", f'art_height={art_height}',
        "-D", f'line_offset={line_offset}',
        "-D", f'silhouette_exp={silhouette_exp}',
        "-D", f'cutter_shape="{cutter_shape}"',
        "-D", f'cutter_width={cutter_width}',
        "-D", f'cutter_height={cutter_height}',
        "-D", f'art_center_x={art_center_x}',
        "-D", f'art_center_y={art_center_y}'
    ]

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
