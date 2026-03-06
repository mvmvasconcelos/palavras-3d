import xml.etree.ElementTree as ET
import re

def is_background_color(fill):
    if not fill or fill == 'none': return False
    fill = fill.strip().lower()
    if fill in ['#ffffff', '#fff', 'white']: return True
    
    match = re.search(r'rgb\((\d+),\s*(\d+),\s*(\d+)\)', fill)
    if match:
        r, g, b = map(int, match.groups())
        if r > 240 and g > 240 and b > 240:
            return True
            
    if fill.startswith('#') and len(fill) == 7:
        try:
            if int(fill[1:3], 16) > 240 and int(fill[3:5], 16) > 240 and int(fill[5:7], 16) > 240:
                return True
        except: pass
    return False

# OpenSCAD imports scale SVG coordinates directly.
# If an SVG is 3500px wide, it becomes 3500mm.
# By setting `width` and `height`, do we change how OpenSCAD scales it? Or do we need to manually scale the path `d`?
# Actually, OpenSCAD respects adding a <g transform="scale(X)"> around all elements.

def process_svg(filepath, output_path):
    # Parse without choking on namespaces
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple regex removal of paths that are white
    # This avoids xml.etree namespace headaches which drop attributes on saving
    def replacer(match):
        tag = match.group(0)
        # Search for fill attr
        fill_match = re.search(r'fill="([^"]+)"', tag)
        if fill_match and is_background_color(fill_match.group(1)):
            return '' # remove path
        return tag

    cleaned = re.sub(r'<path[^>]*>', replacer, content)
    
    # Try to find SVG dimensions to normalize scale to ~100mm
    width_match = re.search(r'width="([\d.]+)"', cleaned)
    vb_match = re.search(r'viewBox="[\d.]+\s+[\d.]+\s+([\d.]+)\s+[\d.]+"', cleaned)
    w = None
    if width_match: w = float(width_match.group(1))
    elif vb_match: w = float(vb_match.group(1))

    if w and w > 0:
        # Scale factor to make the base width ~100 units (mm)
        scale_val = 100.0 / w
        if scale_val < 0.9 or scale_val > 1.1:
            # Wrap all inner content in a scale group
            # Find the closing > of the <svg ...> tag
            svg_close = cleaned.find('>', cleaned.find('<svg')) + 1
            before = cleaned[:svg_close]
            after = cleaned[svg_close:]
            after = after.replace('</svg>', '')
            cleaned = f'{before}\n<g transform="scale({scale_val:.6f})">\n{after}\n</g>\n</svg>'
            
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(cleaned)

process_svg('samples/teste.svg', 'samples/teste_cleaned.svg')
print("Processed -> samples/teste_cleaned.svg")
