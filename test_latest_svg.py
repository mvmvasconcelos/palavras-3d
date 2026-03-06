import os
import glob
import subprocess
import time

UPLOAD_DIR = 'web/static/uploads/svg'
scad_file = 'models/enfeite_lapis_svg/model.scad'
temp_scad = 'temp_test_latest.scad'

# Get latest svg
svg_files = glob.glob(f"{UPLOAD_DIR}/*.svg")
if not svg_files:
    print("No SVG files found in uploads.")
    exit(0)

latest_svg = "samples/teste_cleaned.svg"
print(f"Testing with cleaned SVG: {latest_svg}")

# Ensure we use an absolute path for safety in script, formatted for OpenSCAD
abs_svg_path = os.path.abspath(latest_svg).replace('\\', '/')
abs_scad_path = os.path.abspath(scad_file).replace('\\', '/')

scad_content = f"""
include <{abs_scad_path}>;

base_color = "#1B40D1";
base_height = 8;
hole_diameter = 7.5;
hole_orientation = "TOPBOTTOM";
hole_type = "CIRCLE";
letter_height = 2.0;
letters_color = "#FFFFFF";
outline_margin = 2.6;
svg_scale = 100;
svg_path = "{abs_svg_path}";

part = "all";
enfeite_lapis_svg();
"""

with open(temp_scad, 'w', encoding='utf-8') as f:
    f.write(scad_content)

cmd = ['C:/Users/IFSUL/Documents/dev/OpenSCAD-Nightly/OpenSCAD-2025.02.27-x86-64/openscad.exe', 
       '--enable=manifold', '--enable=fast-csg', '-o', 'temp_test_latest.stl', temp_scad]

print("Running OpenSCAD...")
start = time.time()
try:
    res = subprocess.run(cmd, capture_output=True, text=True, timeout=90)
    print(f"Done in {time.time() - start:.2f} seconds")
    print("STDOUT:", res.stdout)
    print("STDERR:", res.stderr)
    if os.path.exists("temp_test_latest.stl"):
        print("STL Size:", os.path.getsize("temp_test_latest.stl"), "bytes")
except subprocess.TimeoutExpired:
    print("TIMEOUT AFTER 90s!")
except Exception as e:
    print("Error:", e)
