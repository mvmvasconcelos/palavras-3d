import requests
import json

data = {
    "text_line_1": "Vinicius",
    "text_size_1": 12,
    "text_line_2": "Vasconcelos",
    "text_size_2": 10,
    "font_name": "Bangers",
    "font_bold": False,
    "font_italic": False,
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

r = requests.post("http://localhost:5000/api/models/name_topper/generate", json=data)
print("Status Code:", r.status_code)
print("Response JSON:", json.dumps(r.json(), indent=2))
