import os
import subprocess
import time

OPENSCAD_PATH = r"C:\Program Files\OpenSCAD\openscad.exe"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = BASE_DIR
SCAD_FILE = os.path.join(PROJECT_ROOT, "name_topper.scad")
OUTPUT_DIR = os.path.join(BASE_DIR, "web", "static", "generated")

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# Mock Data
text_lines = ["Profª Cati"]
font_name = "Comic Neue:style=Bold"
text_size = 12
letter_height = 1.4
base_height = 12
outline_margin = 2.3
spacing = 1.0
line_spacing = 1.0
hole_orientation = "TOPBOTTOM"
base_color = "#1B40D1"
letters_color = "#FFFFFF"
rtl = False

def scad_str(s):
    return f'"{s.replace('"', '\\"')}"'

scad_lines_str = "[" + ", ".join([scad_str(line) for line in text_lines]) + "]"
scad_file_escaped = SCAD_FILE.replace('\\', '/')

print(f"SCAD FILE PATH: {SCAD_FILE}")
print(f"ESCAPED PATH: {scad_file_escaped}")

temp_scad_content = f"""
include <{scad_file_escaped}>;

// Overrides
text_lines       = {scad_lines_str};
font_name        = {scad_str(font_name)};
text_size        = {text_size};
letter_height    = {letter_height};
base_height      = {base_height};
outline_margin   = {outline_margin};
spacing          = {spacing};
line_spacing     = {line_spacing};
hole_orientation = {scad_str(hole_orientation)};
base_color       = {scad_str(base_color)};
letters_color    = {scad_str(letters_color)};
rtl              = {'true' if rtl else 'false'};

name_topper();
"""

timestamp = int(time.time())
temp_scad_path = os.path.join(OUTPUT_DIR, f"debug_{timestamp}.scad")
full_path = os.path.join(OUTPUT_DIR, f"debug_model_{timestamp}.stl")

print(f"Writing temp file to: {temp_scad_path}")
with open(temp_scad_path, 'w', encoding='utf-8') as f:
    f.write(temp_scad_content)

cmd_full = [OPENSCAD_PATH, "-o", full_path, "-D", 'part="all"', temp_scad_path]

print(f"Running: {cmd_full}")
try:
    result = subprocess.run(cmd_full, check=True, capture_output=True, text=True)
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)
    print("Success!")
except subprocess.CalledProcessError as e:
    print("FAILED!")
    print("STDOUT:", e.stdout)
    print("STDERR:", e.stderr)
