import os
import subprocess
import time
import zipfile
from flask import Flask, render_template, request, send_from_directory, jsonify

app = Flask(__name__)

# --- Configuration ---
# Adjust this path if necessary or use the same logic as generate.py to find it
OPENSCAD_PATH = r"C:\Program Files\OpenSCAD\openscad.exe" 
# Go up one level from 'web/' to find the SCAD file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
SCAD_FILE = os.path.join(PROJECT_ROOT, "name_topper.scad")
OUTPUT_DIR = os.path.join(BASE_DIR, "static", "generated")

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    
    # Get parameters
    # Get parameters
    line1 = data.get('text_line_1', 'Vinicius')
    line2 = data.get('text_line_2', '')
    
    text_lines = [line1.strip()]
    if line2.strip():
        text_lines.append(line2.strip())

    font_name = data.get('font_name', 'Comic Neue:style=Bold')
    
    size1 = float(data.get('text_size_1', 12))
    size2 = float(data.get('text_size_2', 12))
    text_sizes = [size1]
    if line2.strip():
        text_sizes.append(size2)

    letter_height = data.get('letter_height', 1.4)
    base_height = float(data.get('base_height', 12))
    outline_margin = float(data.get('outline_margin', 2.3))
    spacing = float(data.get('spacing', 1.0))
    line_spacing = float(data.get('line_spacing', 1.0))
    hole_orientation = data.get('hole_orientation', 'TOPBOTTOM')
    hole_type = data.get('hole_type', 'CIRCLE')
    hole_diameter = float(data.get('hole_diameter', 7.8))
    base_color = data.get('base_color', '#1B40D1')
    letters_color = data.get('letters_color', '#FFFFFF')
    rtl = data.get('rtl', False)
    
    # Escape function for SCAD strings
    def scad_str(s):
        sanitized = s.replace('"', '\\"')
        return f'"{sanitized}"'
    
    # Create a temporary SCAD file to avoid CLI encoding issues
    # We use forward slashes for paths in SCAD even on Windows to be safe
    scad_file_escaped = SCAD_FILE.replace('\\', '/')

    scad_lines_str = "[" + ", ".join([scad_str(line) for line in text_lines]) + "]"
    scad_sizes_str = str(text_sizes) 

    temp_scad_content = f"""
include <{scad_file_escaped}>;

// Overrides
text_lines       = {scad_lines_str};
font_name        = {scad_str(font_name)};
text_sizes       = {scad_sizes_str};
letter_height    = {letter_height};
base_height      = {base_height};
outline_margin   = {outline_margin};
spacing          = {spacing};
line_spacing     = {line_spacing};
hole_orientation = {scad_str(hole_orientation)};
hole_type        = {scad_str(hole_type)};
base_color       = {scad_str(base_color)};
letters_color    = {scad_str(letters_color)};
rtl              = {'true' if rtl else 'false'};

// Render based on part
"""

    # Generate unique filenames
    timestamp = int(time.time())
    base_filename = f"base_{timestamp}.stl"
    text_filename = f"text_{timestamp}.stl"
    full_filename = f"model_{timestamp}.stl"
    
    base_path = os.path.join(OUTPUT_DIR, base_filename)
    text_path = os.path.join(OUTPUT_DIR, text_filename)
    full_path = os.path.join(OUTPUT_DIR, full_filename)
    
    # We need 3 temp files or just run one by one?
    # Running one by one with -D part="..." is easier if we have the base params set.
    # Actually, we can append the part call to the temp file or pass it via -D.
    # Passing part via -D is fine because it's ASCII.
    
    temp_scad_path = os.path.join(OUTPUT_DIR, f"temp_{timestamp}.scad")
    
    # Write temp file with UTF-8
    with open(temp_scad_path, 'w', encoding='utf-8') as f:
        f.write(temp_scad_content)
        # We need to call the module! 
        # But name_topper() checks 'part' variable.
        # So we just call name_topper(); at the end.
        f.write("\nname_topper();\n")

    # Command structure
    # openscad -o output.stl -D part="base" temp.scad
    
    cmd_base = [OPENSCAD_PATH, "-o", base_path, "-D", 'part="base"', temp_scad_path]
    cmd_text = [OPENSCAD_PATH, "-o", text_path, "-D", 'part="letters"', temp_scad_path]
    cmd_full = [OPENSCAD_PATH, "-o", full_path, "-D", 'part="all"', temp_scad_path]

    print(f"--- START GENERATION ---")
    print(f"Temp SCAD: {temp_scad_path}")
    
    try:
        print(f"Generating BASE... (Timeout 20s)")
        subprocess.run(cmd_base, check=True, capture_output=True, timeout=20)
        
        print(f"Generating TEXT... (Timeout 20s)")
        subprocess.run(cmd_text, check=True, capture_output=True, timeout=20)

        print(f"Generating FULL MODEL... (Timeout 20s)")
        subprocess.run(cmd_full, check=True, capture_output=True, timeout=20)
        
        print(f"--- FINISHED GENERATION ---")
        
        # Cleanup temp file
        if os.path.exists(temp_scad_path):
            os.remove(temp_scad_path)

        # Create ZIP file for multi-color
        zip_filename = f"topper_multicolor_{timestamp}.zip"
        zip_path = os.path.join(OUTPUT_DIR, zip_filename)
        
        with zipfile.ZipFile(zip_path, 'w') as zipf:
            zipf.write(base_path, arcname="base.stl")
            zipf.write(text_path, arcname="text.stl")

        return jsonify({
            "success": True, 
            "base_url": f"/static/generated/{base_filename}",
            "text_url": f"/static/generated/{text_filename}",
            "full_url": f"/static/generated/{full_filename}",
            "zip_url": f"/static/generated/{zip_filename}"
        })
    except subprocess.TimeoutExpired:
        print("ERROR: OpenSCAD timed out!")
        return jsonify({"success": False, "error": "OpenSCAD generation timed out"}), 500
    except subprocess.CalledProcessError as e:
        print(f"ERROR: OpenSCAD failed! Return code: {e.returncode}")
        print(f"STDERR: {e.stderr}")
        return jsonify({"success": False, "error": "OpenSCAD generation failed"}), 500
    except Exception as e:
        print(f"ERROR: Unexpected exception: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
