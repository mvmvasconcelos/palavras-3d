/*[Name Settings]*/
svg_path         = "";      
svg_max_width    = 100;     // Comprimento Máximo da Peça (mm)
letter_height    = 2.0;     // Height of the raised text (extrusion), mm
base_height      = 8;       // Height (size) of the base, mm
outline_margin   = 2.6;     // How far the outline expands beyond the text, mm

/*[Hole Settings]*/
hole_type        = "CIRCLE";      // ["CIRCLE", "HEXAGON"]
hole_orientation = "TOPBOTTOM";   // ["FRONTBACK", "TOPBOTTOM"]
hole_diameter    = 7.5;           // mm
hole_length      = 500;           // mm 
hole_x           = 0;             
hole_y           = 0;             
hole_z           = base_height / 2; 

/*[Color]*/
base_color    = "#1B40D1";  
letters_color = "#FFFFFF";  

module custom_svg() {
    if (svg_path != "") {
        // Automatically mathematically resizes the SVG vector so its physical width
        // matches the specific mm length chosen by the user
        resize([svg_max_width, 0], auto=true)
        import(file=svg_path, center=true);
    } else {
        // Default preview box if no SVG provided
        square([20, 20], center=true);
    }
}

module base_with_tunnel() {
    difference() {
        linear_extrude(height = base_height)
            offset(delta = outline_margin, chamfer=true)
                custom_svg();

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
    }
}

module raised_letters() {
    translate([ 0, 0, base_height - 0.1 ])
        linear_extrude(height = letter_height + 0.1)
            custom_svg();
}

// Output control
part = "all"; // ["all", "base", "letters"]

module enfeite_lapis_svg() {
    if (part == "all" || part == "base") {
        color(base_color) base_with_tunnel();
    }
    if (part == "all" || part == "letters") {
        color(letters_color) raised_letters();
    }
}

// enfeite_lapis_svg();
