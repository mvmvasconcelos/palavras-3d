/*[Name Settings]*/
text_lines       = ["Mickey"]; // Array of strings
font_name        = "Comic Neue:style=Bold"; // font
text_sizes       = [12, 12];   // Size of the text (font size), mm
letter_height    = 1.4;  // Height of the raised text (extrusion), mm
base_height      = 12;   // Height (size) of the base, mm
outline_margin   = 2.3;    // How far the outline expands beyond the text, mm
spacing          = 1.0;    // Letter spacing (1.0 = normal)
line_spacing     = 1.0;    // Line spacing factor

/*[Bottom Text Settings]*/
bottom_text_lines = ["Lembrança"]; // Array of strings for bottom
bottom_text_sizes = [10];          // Array of text sizes for bottom
bottom_text_depth = 0.2;        // Depth of the text into the base, mm
bottom_line_spacing = 1.0;      // Line spacing factor for bottom text

/*[Hole Settings]*/
hole_type        = "CIRCLE";      // ["CIRCLE", "HEXAGON"]
hole_orientation = "FRONTBACK";   // ["FRONTBACK", "TOPBOTTOM"]
hole_diameter    = 7.8;           // mm
hole_length      = 150;           // mm (≥ base_height when TOPBOTTOM; ≥ name depth when FRONTBACK)
hole_x           = 0;             // Adjust for TOPBOTTOM hole, mm
hole_y           = 0;             // Centered at 0, mm 
hole_z           = base_height / 2; // mm

/*[Color]*/
base_color    = "#1B40D1";   // color of the outline/base
letters_color = "#FFFFFF";  // color of the raised letters

/*[Direction/Aligment]*/
rtl          = false;
text_halign  = "center";

module bottom_text_2d() {
    mirror([1, 0, 0]) // Mirror so it reads correctly from the bottom
    for (i = [0 : len(bottom_text_lines) - 1]) {
        translate([0, 
            (len(bottom_text_lines) == 1) ? 0 :
            (i == 0) ? (bottom_text_sizes[1] * bottom_line_spacing * 0.6) :
            -(bottom_text_sizes[0] * bottom_line_spacing * 0.6),
        0])
            text(
                bottom_text_lines[i],
                size   = bottom_text_sizes[i],
                font   = font_name,
                halign = text_halign,
                valign = "center",
                spacing= spacing
            );
    }
}

module base_with_tunnel() {
    difference() {
        // Render multi-line text with variable sizes
        linear_extrude(height = base_height)
            offset(r = outline_margin, $fn=60)
                for (i = [0 : len(text_lines) - 1]) {
                    // Logic for 2 lines or general case
                    // Simplified centering for up to 2 lines for now to ensure stability
                    // If 1 line: y=0
                    // If 2 lines:
                    //   Line 0 (top): y = + (text_sizes[1] * line_spacing * 0.5) ? No, let's use a simpler stack approach.
                    //   Center point between lines.
                    
                    // New simplistic logic:
                    // If 1 line -> y=0
                    // If 2 lines -> 
                    //    Top:    + (text_sizes[1]/2 + text_sizes[0]/2) * line_spacing / 2  ... wait
                    //    Let's just use fixed relative offsets centered.
                    //    Total Height approx = sum of sizes * spacing.
                    
                    // robust approach:
                    translate([0, 
                        (len(text_lines) == 1) ? 0 :
                        (i == 0) ? (text_sizes[1] * line_spacing * 0.6) : // Top line (moved up)
                        -(text_sizes[0] * line_spacing * 0.6),            // Bottom line (moved down)
                    0])
                        text(
                            text_lines[i],
                            size   = text_sizes[i], // Use individual size
                            font   = font_name,
                            halign = text_halign,
                            valign = "center",
                            spacing= spacing
                        );
                }

        // ────────────────────────────────────────────────────────
        // Tunnel cylinder
        //    – FRONTBACK: cuts front/back faces, axis = X:
        //    – TOPBOTTOM: cuts top/bottom faces, axis = Y:
        // ────────────────────────────────────────────────────────
        if (hole_orientation == "FRONTBACK") {
            translate([ 0, hole_y, hole_z ])
                rotate([ 0, 90, 0 ])
                    cylinder(
                        d      = hole_diameter,
                        h      = hole_length,
                        center = true,
                        $fn    = (hole_type == "HEXAGON") ? 6 : 100
                    );
        }
        else if (hole_orientation == "TOPBOTTOM") {
            translate([ hole_x, 0, hole_z ])
                rotate([ 90, 0, 0 ])
                    cylinder(
                        d      = hole_diameter,
                        h      = hole_length,
                        center = true,
                        $fn    = (hole_type == "HEXAGON") ? 6 : 100
                    );
        }
        else {
            echo("Error: hole_orientation must be \"FRONTBACK\" or \"TOPBOTTOM\".");
        }
        
        // Subtract the bottom text from the base (from z=-0.1 to z=bottom_text_depth)
        translate([0, 0, -0.1])
            linear_extrude(height = bottom_text_depth + 0.1)
                bottom_text_2d();
    }
}

module raised_letters() {
    translate([ 0, 0, base_height ])
        linear_extrude(height = letter_height)
            for (i = [0 : len(text_lines) - 1]) {
                translate([0, 
                    (len(text_lines) == 1) ? 0 :
                    (i == 0) ? (text_sizes[1] * line_spacing * 0.6) :
                    -(text_sizes[0] * line_spacing * 0.6),
                0])
                     text(
                        text_lines[i],
                        size   = text_sizes[i],
                        font   = font_name,
                        halign = text_halign,
                        valign = "center",
                        spacing= spacing
                    );
            }
            
    // Extrude the bottom text inside the boundary z=0 to z=bottom_text_depth
    // This allows it to be exported in the letters.stl for multi-material mapping
    translate([0, 0, 0])
        linear_extrude(height = bottom_text_depth)
            bottom_text_2d();
}

// Output control
part = "all"; // ["all", "base", "letters"]

module enfeite_lapis_fundo() {
    if (part == "all" || part == "base") {
        color(base_color) base_with_tunnel();
    }
    if (part == "all" || part == "letters") {
        color(letters_color) raised_letters();
    }
}

// enfeite_lapis_fundo(); // Commented out to allow control via including file or -D
