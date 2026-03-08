// model.scad for Chaveiro com Imagem

/*[ Parâmetros de Entrada ]*/
base_shape = "RECTANGLE"; // ["RECTANGLE", "CIRCLE"]
base_length = 60;
base_width = 30;
base_height = 4;
border_radius = 3;
text1 = "Meu Chaveiro";
svg_path = "";
border_width = 2;
border_height = 2;
hole_diameter = 3.2;
hole_margin = 4;
content_x = 0;
content_y = 0;
text_size = 10;
svg_max_width = 20;

/*[ Cores ]*/
base_color = "#1B40D1";
letters_color = "#FFFFFF";

/*[ Qualidade ]*/
$fn = 60;

module custom_svg() {
    if (svg_path != "") {
        resize([svg_max_width, 0], auto=true)
        import(file=svg_path, center=true);
    }
}

module custom_text() {
    if (text1 != "") {
        text(text1, size=text_size, font="Arial:style=Bold", halign="center", valign="center");
    }
}

module rounded_square(w, h, r) {
    if (r > 0) {
        offset(r=r) square([max(0.1, w - 2*r), max(0.1, h - 2*r)], center=true);
    } else {
        square([w, h], center=true);
    }
}

module base_2d() {
    if (base_shape == "RECTANGLE") {
        rounded_square(base_length, base_width, border_radius);
    } else if (base_shape == "CIRCLE") {
        circle(d=base_length);
    }
}

module border_2d() {
    difference() {
        base_2d();
        if (base_shape == "RECTANGLE") {
            rounded_square(base_length - 2*border_width, base_width - 2*border_width, max(0, border_radius - border_width));
        } else if (base_shape == "CIRCLE") {
            circle(d=base_length - 2*border_width);
        }
    }
}

module hole_2d() {
    if (base_shape == "RECTANGLE") {
        eff_margin = max(hole_margin, border_radius - max(0, border_radius - hole_margin) * 0.7071);
        translate([-base_length/2 + eff_margin, base_width/2 - eff_margin])
            circle(d=hole_diameter);
    } else if (base_shape == "CIRCLE") {
        dist = (base_length / 2) - hole_margin;
        translate([dist * -0.7071, dist * 0.7071]) 
            circle(d=hole_diameter);
    }
}

module inner_area_padded_2d() {
    if (base_shape == "RECTANGLE") {
        rounded_square(base_length - 2*border_width - 2, base_width - 2*border_width - 2, max(0, border_radius - border_width - 1));
    } else if (base_shape == "CIRCLE") {
        circle(d=base_length - 2*border_width - 2);
    }
}

module safe_content_3d() {
    // Intersecção 3D é calculada centenas de vezes mais rápido pela engine Fast-CSG/Manifold
    intersection() {
        linear_extrude(height = border_height + 0.01) {
            inner_area_padded_2d();
        }
        linear_extrude(height = border_height + 0.01) {
            translate([content_x, content_y]) {
                union() {
                    custom_text();
                    custom_svg();
                }
            }
        }
    }
}

module base_part() {
    difference() {
        linear_extrude(height = base_height) {
            base_2d();
        }
        translate([0, 0, -1])
        linear_extrude(height = base_height + 2) {
            hole_2d();
        }
    }
}

module letters_part() {
    translate([0, 0, base_height - 0.01]) {
        difference() {
            union() {
                linear_extrude(height = border_height + 0.01) {
                    border_2d();
                }
                safe_content_3d();
            }
            translate([0, 0, -1])
            linear_extrude(height = border_height + 2) {
                hole_2d();
            }
        }
    }
}

// Output control para multicor
part = "all"; // ["all", "base", "letters"]

module chaveiro_imagem() {
    if (part == "all" || part == "base") {
        color(base_color) base_part();
    }
    if (part == "all" || part == "letters") {
        color(letters_color) letters_part();
    }
}

chaveiro_imagem();
