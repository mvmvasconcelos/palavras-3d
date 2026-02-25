import os
import sys
import time
from fontTools.ttLib import TTFont
from flask import Flask, render_template, request, send_from_directory, jsonify, abort

# Add parent directory to sys.path to allow importing from core
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from core.models_manager import get_all_models, get_model_config, get_model_scad_path
from core.generator import generate_model

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
OUTPUT_DIR = os.path.join(BASE_DIR, "static", "generated")
FONTS_DIR = os.path.join(BASE_DIR, "static", "fonts")

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

if not os.path.exists(FONTS_DIR):
    os.makedirs(FONTS_DIR)

def get_font_name(font_path):
    try:
        font = TTFont(font_path)
        for record in font['name'].names:
            if record.nameID == 1:
                if b'\x00' in record.string:
                    return record.string.decode('utf-16-be')
                return record.string.decode('latin-1')
    except Exception as e:
        print(f"Error reading font {font_path}: {e}")
    return "Unknown Font"

@app.route('/api/fonts', methods=['GET'])
def list_fonts():
    fonts = []
    if os.path.exists(FONTS_DIR):
        for f in os.listdir(FONTS_DIR):
            if f.lower().endswith('.ttf') or f.lower().endswith('.otf'):
                path = os.path.join(FONTS_DIR, f)
                name = get_font_name(path)
                fonts.append({"filename": f, "name": name, "url": f"/static/fonts/{f}"})
    return jsonify(fonts)

@app.route('/api/upload-font', methods=['POST'])
def upload_font():
    if 'font_file' not in request.files:
        return jsonify({"success": False, "error": "No file part"}), 400
    
    file = request.files['font_file']
    if file.filename == '':
        return jsonify({"success": False, "error": "No selected file"}), 400
    
    if file and (file.filename.lower().endswith('.ttf') or file.filename.lower().endswith('.otf')):
        filename = file.filename
        path = os.path.join(FONTS_DIR, filename)
        file.save(path)
        
        real_name = get_font_name(path)
        return jsonify({
            "success": True, 
            "filename": filename, 
            "name": real_name,
            "url": f"/static/fonts/{filename}"
        })
    
    return jsonify({"success": False, "error": "Invalid file type. Only TTF/OTF allowed."}), 400

# ==========================================
# MULTI-MODEL ROUTES
# ==========================================

@app.route('/')
def home():
    models = get_all_models()
    return render_template('home.html', models=models)

@app.route('/model/<model_id>')
def product_page(model_id):
    model = get_model_config(model_id)
    if not model:
        abort(404, description="Model not found")
    return render_template('product.html', model=model)

@app.route('/model/<model_id>/editor')
def editor_page(model_id):
    model = get_model_config(model_id)
    if not model:
        abort(404, description="Model not found")
    return render_template('generator.html', model=model)

@app.route('/api/models/<model_id>/config', methods=['GET'])
def api_model_config(model_id):
    model = get_model_config(model_id)
    if not model:
        return jsonify({"error": "Model not found"}), 404
    return jsonify(model)

@app.route('/api/models/<model_id>/generate', methods=['POST'])
def api_model_generate(model_id):
    data = request.json
    scad_path = get_model_scad_path(model_id)
    
    if not scad_path:
        return jsonify({"success": False, "error": "Model SCAD file not found"}), 404
        
    font_filename = data.pop('font_filename', None) # Extract font_filename if any
    
    # Handle specific lines list logic for legacy name topper to keep it simple,
    # or let the frontend send the exact structure.
    # Actually, the frontend should send "text_lines": ["Line 1", "Line 2"]. 
    # BUT, to keep the blind injection simple and working out of the box with the legacy SCAD file:
    # If the SCAD file expects `text_lines = ["Vinicius", ""];` we must build it here if the UI sends text_line_1.
    # A cleaner approach is handling this logic inside the Form builder or here.
    # Handle legacy name_topper specific parameters (Text lines processing)
    if model_id == "name_topper":
        line1 = data.pop('text_line_1', '')
        line2 = data.pop('text_line_2', '')
        size1 = float(data.pop('text_size_1', 12))
        size2 = float(data.pop('text_size_2', 12))
        
        lines = []
        sizes = []
        if line1:
            lines.append(line1)
            sizes.append(size1)
        if line2:
            lines.append(line2)
            sizes.append(size2)
            
        data['text_lines'] = '[' + ', '.join([f'"{l}"' for l in lines]) + ']'
        data['text_sizes'] = '[' + ', '.join([str(s) for s in sizes]) + ']'
        
        parts_to_render = ["base", "letters", "all"]
    else:
        # Default blind rendering
        parts_to_render = ["all"]
        
    font_include = None
    if font_filename:
        font_full_path = os.path.join(FONTS_DIR, font_filename)
        font_include = font_full_path.replace('\\', '/')
        
    result = generate_model(scad_path, data, font_include=font_include, parts=parts_to_render)
    
    if result["success"]:
        # Map back to old expected keys for legacy viewer compatibility
        files = result["files"]
        return jsonify({
            "success": True,
            "base_url": files.get("base"),
            "text_url": files.get("letters"),
            "full_url": files.get("all"),
            "zip_url": files.get("zip")
        })
    else:
        return jsonify(result), 500

# Legacy route for testing
@app.route('/teste-furos')
def teste_furos():
    return render_template('teste-furos.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
