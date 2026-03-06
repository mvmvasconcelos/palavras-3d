import subprocess, time, os

scad_file = 'models/enfeite_lapis_svg/model.scad'
temp_scad_path = 'temp_debug.scad'
svg_name = '1772665738_teste.svg'
svg_path = f'web/static/uploads/svg/{svg_name}'

content = f'''
include <{os.path.abspath(scad_file).replace('\\\\', '/')}>;

base_color = "#1B40D1";
base_height = 8;
hole_diameter = 7.5;
hole_orientation = "TOPBOTTOM";
hole_type = "CIRCLE";
letter_height = 2.0;
letters_color = "#FFFFFF";
outline_margin = 2.6;
svg_scale = 100;
svg_path = "{os.path.abspath(svg_path).replace('\\\\', '/')}";

part = "base";
enfeite_lapis_svg();
'''

with open(temp_scad_path, 'w', encoding='utf-8') as f:
    f.write(content)

cmd = ['C:/Users/IFSUL/Documents/dev/OpenSCAD-Nightly/OpenSCAD-2025.02.27-x86-64/openscad.exe', '--enable=manifold', '--enable=fast-csg', '-o', 'temp_debug.stl', temp_scad_path]
print('Running OpenSCAD on Base...')
start = time.time()
try:
    res = subprocess.run(cmd, check=True, capture_output=True, timeout=120)
    print('Done in', time.time() - start)
except subprocess.TimeoutExpired:
    print('Timeout after 120s')
except subprocess.CalledProcessError as e:
    print('Error:', e.stderr.decode('utf-8'))
