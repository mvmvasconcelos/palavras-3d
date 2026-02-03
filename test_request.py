import urllib.request
import json

url = "http://127.0.0.1:5000/generate"
payload = {
    "text_string": "Test",
    "font_name": "Comic Neue",
    "text_size": 12,
    "letter_height": 1.4,
    "base_height": 12,
    "outline_margin": 2.3,
    "spacing": 1.0,
    "line_spacing": 1.0,
    "hole_orientation": "TOPBOTTOM",
    "base_color": "#0000FF",
    "letters_color": "#FFFFFF",
    "rtl": False
}

data = json.dumps(payload).encode('utf-8')
req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(req) as response:
        print(f"Status Code: {response.getcode()}")
        print("Response Text:")
        print(response.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print(f"Request failed with status {e.code}")
    print(e.read().decode('utf-8'))
except Exception as e:
    print(f"Request failed: {e}")
