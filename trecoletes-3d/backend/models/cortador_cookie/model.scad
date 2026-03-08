// Injected from Backend
svg_linhas_path   = "linhas.svg";
svg_silhueta_path = "silhueta.svg";  // reserved, not used directly

// Dimensions (injected by backend from UI)
art_width  = 70.0;   // [mm] target artwork width
art_height = 70.0;   // [mm] target artwork height

// Heights and Config
base_height    = 2.0;
line_height    = 4.0;
wall_height    = 12.0;
brim_width     = 3.0;
wall_thickness = 1.2;
silhouette_exp = 4.0; // [mm] spacing between art boundary and silhouette edge
folga          = 1.0;
line_offset    = 0.0; // [mm] expand artwork lines outward (stroke width effect)

// Cutter shape: "silhouette" | "square" | "circle" | "rectangle" | "hexagon"
cutter_shape  = "silhouette";
cutter_width  = 80.0; // [mm] used by square/circle/rectangle/hexagon
cutter_height = 80.0; // [mm] used by rectangle/hexagon

// True center of the artwork in OpenSCAD coordinate space.
// Computed by the backend from the SVG viewBox after resize([art_width, art_height]).
// This is where geometric cutter shapes should be centred.
art_center_x = art_width  / 2.0; // backend overrides this
art_center_y = art_height / 2.0; // backend overrides this

// ============================================================
// art_svg: scales SVG to target mm size with optional line offset
// ============================================================
module art_svg() {
    offset(r = line_offset) {
        resize([art_width, art_height, 0], auto=[false, false, false]) {
            import(svg_linhas_path);
        }
    }
}

// ============================================================
// silhoueta_shape: organic silhouette from artwork
// Uses morphological closing (expand→fill gaps→shrink) so the
// result is a solid shape with no holes even for line-art SVGs.
// fill_r must be > half the widest gap in the artwork.
// ============================================================
fill_r = 20; // [mm] large enough to bridge any gap in line art

module silhoueta_shape(extra_r = 0) {
    offset(r = silhouette_exp + extra_r - fill_r) {
        offset(r = fill_r) {
            art_svg();
        }
    }
}

// ============================================================
// main_outline: dispatches to the selected cutter shape.
// Geometric shapes (square/circle/rectangle/hexagon) are centred
// on the art bounding-box midpoint (art_width/2, art_height/2).
// extra_r adds uniform outward offset (used for wall thickness
// and brim).
// ============================================================
module main_outline(extra_r = 0) {
    if (cutter_shape == "silhouette" || cutter_shape == "") {
        silhoueta_shape(extra_r);
    } else {
        // Centre on the actual artwork bounding-box centre.
        // art_center_x/Y are computed by the backend from the SVG viewBox.
        translate([art_center_x, art_center_y]) {
            if (cutter_shape == "square") {
                s = cutter_width + extra_r * 2;
                square([s, s], center = true);
            } else if (cutter_shape == "circle") {
                circle(r = cutter_width / 2 + extra_r, $fn = 128);
            } else if (cutter_shape == "rectangle") {
                square([cutter_width  + extra_r * 2,
                        cutter_height + extra_r * 2], center = true);
            } else if (cutter_shape == "hexagon") {
                r_hex = (cutter_width / 2) / cos(30);
                circle(r = r_hex + extra_r, $fn = 6);
            } else {
                // fallback: silhouette
                silhoueta_shape(extra_r);
            }
        }
    }
}

// ============================================================
// Module: Carimbo
//   - Base plate (main_outline shape)
//   - Raised artwork on top
// ============================================================
module carimbo() {
    color("SlateGray")
    linear_extrude(height = base_height) {
        offset(r = -folga) {
            main_outline();
        }
    }

    color("WhiteSmoke")
    translate([0, 0, base_height])
    linear_extrude(height = line_height - base_height) {
        art_svg();
    }
}

// ============================================================
// Module: Cortador (Cookie Cutter)
//   - Hollow wall following main_outline
//   - Protective brim on top
// ============================================================
module cortador() {
    color("IndianRed")
    difference() {
        linear_extrude(height = wall_height) {
            main_outline(extra_r = wall_thickness);
        }
        translate([0, 0, -1])
        linear_extrude(height = wall_height + 2) {
            main_outline();
        }
    }

    color("FireBrick")
    translate([0, 0, wall_height - 1.5])
    linear_extrude(height = 1.5) {
        difference() {
            main_outline(extra_r = wall_thickness + brim_width);
            main_outline(extra_r = wall_thickness);
        }
    }
}

// ============================================================
// Render Control
// Part: "all" | "carimbo" | "cortador" | "carimbo_base" | "carimbo_arte"
// ============================================================
part = "all";

if (part == "all") {
    carimbo();
    translate([200, 0, 0]) cortador();
} else if (part == "carimbo") {
    carimbo();
} else if (part == "cortador") {
    cortador();
} else if (part == "carimbo_base") {
    color("SlateGray")
    linear_extrude(height = base_height) {
        offset(r = -folga) {
            main_outline();
        }
    }
} else if (part == "carimbo_arte") {
    color("WhiteSmoke")
    translate([0, 0, base_height])
    linear_extrude(height = line_height - base_height) {
        art_svg();
    }
}
