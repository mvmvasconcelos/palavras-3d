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
        return svg_bytes  # safe fallback

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
    # DEBUG: print raw SVG header to inspect viewBox from Paper.js
    print(f"[DEBUG linhas.svg first 300]: {svg_bytes[:300].decode('utf-8','ignore')}", flush=True)
    svg_bytes = normalize_svg_viewbox(svg_bytes)  # ensure viewBox starts at (0,0)
    print(f"[DEBUG linhas.svg after normalize first 300]: {svg_bytes[:300].decode('utf-8','ignore')}", flush=True)
    with open(linhas_path, "wb") as f:
        f.write(svg_bytes)

    # After normalize_svg_viewbox the SVG viewBox is always (0 0 W H).
    # paper.js also normalises paths so bounding box starts at (0,0).
    # OpenSCAD import + resize([art_width, art_height]) places the
    # content from (0,0)→(art_width, art_height) in SCAD XY space.
    # art_svg() in model.scad adds translate([-art_width/2, -art_height/2])
    # so the art ends up centred at (0, 0), aligned with main_outline().
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
        "-D", f'cutter_height={cutter_height}'
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
