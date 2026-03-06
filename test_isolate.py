import re
import subprocess
import os

with open('samples/teste.svg', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    tag = match.group(0)
    fill_match = re.search(r'fill="([^"]+)"', tag)
    fill = fill_match.group(1).lower() if fill_match else 'none'
    
    d_match = re.search(r'd="([^"]+)"', tag)
    d_len = len(d_match.group(1)) if d_match else 0
    
    # We WANT the white foreground letters. They usually have rgb(253...) or #fff
    is_white = '253,253,252' in fill or '#fff' in fill or 'white' in fill
    
    # But we DO NOT want the massive white background canvas (which has huge d_len or area)
    # The canvas in teste.svg has a d_len > 5000 chars. The letters are < 1300 chars.
    if is_white and d_len < 3000:
        return tag # KEEP this path
    
    # Delete everything else (Black paths, Canvas paths)
    return ''

cleaned = re.sub(r'<path[^>]*>', replacer, content)

with open('test_isolated.svg', 'w', encoding='utf-8') as f:
    f.write(cleaned)

scad = 'import(file="test_isolated.svg");'
with open('test_isolated.scad', 'w') as f:
    f.write(scad)

print('Running OpenSCAD on strictly isolated letters...')
cmd = ['C:/Users/IFSUL/Documents/dev/OpenSCAD-Nightly/OpenSCAD-2025.02.27-x86-64/openscad.exe', 
       '--enable=manifold', '--enable=fast-csg', '-o', 'test_isolated.stl', 'test_isolated.scad']
try:
    res = subprocess.run(cmd, check=True, capture_output=True, text=True)
    import struct
    if os.path.exists('test_isolated.stl'):
        with open('test_isolated.stl', 'rb') as f:
            f.seek(80)
            print('Isolated Triangles Generated:', struct.unpack('<I', f.read(4))[0])
except subprocess.CalledProcessError as e:
    print('OpenSCAD Error:', e.stderr)
