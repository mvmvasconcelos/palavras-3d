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

// Art centre in OpenSCAD SCAD space after resize([art_width, art_height]).
// Because svgProcessor.ts normalises the exported SVG to start at (0,0),
// the content reliably spans (0,0)→(art_width, art_height), so the centre is
// always at (art_width/2, art_height/2).  The backend may override these.
art_center_x = art_width  / 2.0;
art_center_y = art_height / 2.0;

// ============================================================
// art_svg: scales SVG to target mm size with optional line offset
// ============================================================
module art_svg() {
    // ── CENTERING DEBUG HISTORY ──────────────────────────────────
    // The SVG from the frontend (paper.js) originally had viewBox much
    // larger than content (e.g. "0 0 500 500" but paths at 90→410).
    // OpenSCAD resize() scales from origin, so dead space scaled too,
    // making the center NOT at (art_width/2, art_height/2).
    //
    // Attempt 1:  translate([-aw/2, +ah/2])   — WRONG (assumed Y-flip)
    // Attempt 2:  translate([-aw/2, -ah/2])   — correct formula BUT
    //             only works when SVG content starts at (0,0).
    // Attempt 3:  Fixed svgProcessor.ts to translate each PathItem
    //             individually (not the group).  Did NOT help because
    //             paper.js exportSVG still emitted canvas-sized viewBox.
    // Attempt 4 (current fix, 2026-03-09):
    //   Backend normalize_svg_to_origin() in _svg_normalize.py now
    //   parses SVG path data, finds true content bounds, adds
    //   <g transform="translate(-minX,-minY)"> and sets viewBox to
    //   "0 0 contentW contentH".  After this, resize() places art
    //   reliably at (0,0)→(art_width, art_height).
    // ─────────────────────────────────────────────────────────────
    translate([-art_width / 2, -art_height / 2]) {
        offset(r = line_offset) {
            resize([art_width, art_height, 0], auto=[false, false, false]) {
                import(svg_linhas_path);
            }
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
// All shapes are centred at (0,0) — same as art_svg() above.
// extra_r adds uniform outward offset (wall thickness / brim).
// ============================================================
module main_outline(extra_r = 0) {
    if (cutter_shape == "silhouette" || cutter_shape == "") {
        // silhouete_shape is derived from art_svg(), so it is also at (0,0).
        silhoueta_shape(extra_r);
    } else if (cutter_shape == "square") {
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
        silhoueta_shape(extra_r); // fallback
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
