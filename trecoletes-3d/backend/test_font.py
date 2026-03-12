import subprocess
import os

scad_content = """
translate([0,0,0]) text("A", font="TAN - NIMBUS:style=Regular");
translate([0,10,0]) text("B", font="Eastman Condensed Alt Trial:style=Regular");
translate([0,-10,0]) text("C", font="TAN-NIMBUS");
translate([0,-20,0]) text("D", font="EastmanCondensedAltTrial-Regular");
"""

with open('/tmp/test.scad', 'w') as f:
    f.write(scad_content)

result = subprocess.run(['openscad', '-o', '/tmp/test.svg', '/tmp/test.scad'], capture_output=True, text=True)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
