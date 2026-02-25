import urllib.request
import json
import os

url = "http://127.0.0.1:5000/generate"
payload = {
    "text_line_1": "Profe",
    "text_line_2": "Cati",
    "text_size_1": 6,
    "text_size_2": 13,
    "font_name": "Chewy",
    "font_filename": "Chewy-Regular.ttf", 
    "letter_height": 1.4,
    "base_height": 12,
    "outline_margin": 2.3,
    "spacing": 1.0,
    "line_spacing": 1.0,
    "hole_orientation": "TOPBOTTOM",
    "hole_type": "CIRCLE",
    "hole_diameter": 7.8,
    "base_color": "#1B40D1",
    "letters_color": "#FFFFFF",
    "rtl": False
}

data = json.dumps(payload).encode('utf-8')
req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})

try:
    print("Sending request...")
    with urllib.request.urlopen(req, timeout=30) as response:
        print(f"Status Code: {response.getcode()}")
        print("Response Text:")
        print(response.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print(f"Request failed with status {e.code}")
    print(e.read().decode('utf-8'))
except Exception as e:
    print(f"Request failed: {e}")
