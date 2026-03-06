import xml.etree.ElementTree as ET
import re
import subprocess

def approximate_area(d_str):
    nums = re.findall(r'-?\\d+\\.?\\d*', d_str)
    if not nums: return 0
    nums = [float(n) for n in nums]
    x_coords = nums[0::2]
    y_coords = nums[1::2]
    if x_coords and y_coords:
        return (max(x_coords) - min(x_coords)) * (max(y_coords) - min(y_coords))
    return 0

def clean_svg_for_openscad(input_file, output_file):
    ET.register_namespace('', 'http://www.w3.org/2000/svg')
    tree = ET.parse(input_file)
    root = tree.getroot()
    
    # 1. Group paths by color, calculate areas
    color_groups = {}
    paths_info = []
    
    for parent in root.findall('.//'):
        for child in list(parent):
            if child.tag.endswith('path'):
                fill = child.attrib.get('fill', 'none').lower()
                d_str = child.attrib.get('d', '')
                area = approximate_area(d_str)
                
                info = {'elem': child, 'parent': parent, 'fill': fill, 'area': area, 'd': d_str}
                paths_info.append(info)
                
                if fill not in color_groups:
                    color_groups[fill] = []
                color_groups[fill].append(info)
                
    if not paths_info: return
    
    # Determine the "canvas" size from the maximum area path
    max_area = max(p['area'] for p in paths_info)
    
    # We want to identify the "foreground text" color.
    # Usually: 
    # - Background color has 1 massive path (area > 80% canvas).
    # - Outline color has 1-2 massive paths.
    # - Foreground text color has MANY smaller paths (area < 20% canvas), representing the letters.
    
    # Let's count paths and filter out "bg" colors
    valid_colors = []
    for fill, paths in color_groups.items():
        # If this color has a massive path, it's a background or outline
        has_massive = any(p['area'] > max_area * 0.4 for p in paths)
        if not has_massive:
            valid_colors.append(fill)
            
    # If we found colors that don't have massive paths, those are our foreground text!
    # If a color is valid, keep it. Otherwise, delete all its paths.
    # Wait, what if the user ONLY uploaded a single color text with no background?
    # Then max_area * 0.4 would exclude it if it's a single connected cursive word...
    
    # Simpler logic for this specifically challenging SVG:
    # Just filter out any paths that are HUGE, AND filter out dark "hole fillers".
    # Wait, if we just keep the 'rgb(253,253,252)' paths EXCEPT the huge one?
    target_color = 'rgb(253,253,252)'
    for p in paths_info:
        # Keep if it matches target color AND is not the huge background
        if target_color in p['fill'] and p['area'] < max_area * 0.5:
            pass # Keep
        else:
            p['parent'].remove(p['elem']) # Delete everything else (including the 3 black holes!)
            
    tree.write(output_file, encoding='utf-8')

clean_svg_for_openscad('samples/teste.svg', 'test_isolated_letters.svg')

# Render to STL
with open('test_isolated.scad', 'w') as f:
    f.write('import(file="test_isolated_letters.svg");')
cmd = ['C:/Users/IFSUL/Documents/dev/OpenSCAD-Nightly/OpenSCAD-2025.02.27-x86-64/openscad.exe', 
       '--enable=manifold', '--enable=fast-csg', '-o', 'test_isolated.stl', 'test_isolated.scad']
print("Running OpenSCAD on isolated letters...")
subprocess.run(cmd, check=True)

import struct
with open('test_isolated.stl', 'rb') as f:
    f.seek(80)
    print('Isolated Triangles:', struct.unpack('<I', f.read(4))[0])
