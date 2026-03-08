length = 50;
width = 30;
height = 2;
holes = [5, 5.2];
part = "all";

// Helper function just in case max(vector) isn't behaving
function max_val(v, i=0, max_so_far=0) = 
    i == len(v) ? max_so_far : 
    max_val(v, i+1, v[i] > max_so_far ? v[i] : max_so_far);

module test_holes() {
    max_hole = len(holes) > 0 ? max_val(holes) : 1;
    margin_x = (max_hole / 2) + 4; // safety margin on the sides
    
    // Auto-expand base length if it's too small
    min_length = margin_x * 2 + (len(holes) - 1) * (max_hole + 2); // At least 2mm between holes
    actual_length = length < min_length ? min_length : length;
    
    // Auto-expand width if it's too small
    min_width = max_hole + 10;
    actual_width = width < min_width ? min_width : width;

    // Shift Y slightly so text isn't too close to the top edge when using user's custom width
    y_offset = -1;

    difference() {
        // Base plate
        translate([-actual_length/2, -actual_width/2, 0])
            cube([actual_length, actual_width, height]);
        
        // Holes
        if (len(holes) > 0) {
            usable_length = actual_length - margin_x * 2;
            hole_spacing = len(holes) > 1 ? usable_length / (len(holes) - 1) : 0;
            
            for (i = [0:len(holes)-1]) {
                x_pos = len(holes) > 1 ? -actual_length/2 + margin_x + i * hole_spacing : 0;
                
                // Hole
                translate([x_pos, y_offset, -1])
                    cylinder(h=height+2, d=holes[i], $fn=64);
                
                // Text label aligned above the max hole radius
                // using size 3 for smaller font
                y_text = y_offset + (max_hole / 2) + 3; 
                translate([x_pos, y_text, height - 0.6])
                    linear_extrude(1)
                    text(str(holes[i]), size=3.5, halign="center", valign="center", $fn=32);
            }
        }
    }
}
