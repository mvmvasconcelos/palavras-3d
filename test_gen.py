import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from core.generator import generate_model

data = {
    "text_lines": '["Vinicius", "Vasconcelos"]',
    "text_sizes": '[12, 10]',
    "font_name": "Bangers",
    "letter_height": 1.4,
    "base_height": 12,
    "outline_margin": 2.3,
    "spacing": 1.0,
    "line_spacing": 1.0,
    "hole_orientation": "FRONTBACK",
    "hole_type": "CIRCLE",
    "hole_diameter": 7.8,
    "base_color": "#1B40D1",
    "letters_color": "#FFFFFF"
}

scad_path = os.path.join(os.path.abspath(__file__).replace('test_gen.py', ''), 'models', 'name_topper', 'model.scad')
res = generate_model(scad_path, data, parts=['all'])
print("Result:", res)
