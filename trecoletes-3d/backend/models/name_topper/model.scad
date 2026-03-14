// Fontes disponíveis (bundled na pasta do modelo)
use <Chewy-Regular.ttf>
use <Bangers-Regular.ttf>

/*[Texto]*/
text_line_1    = "Vinicius";          // Linha principal
text_line_2    = "";                  // Linha secundária (deixe vazio para desativar)
text_size_1    = 12;                  // Tamanho da Linha 1, mm
text_size_2    = 10;                  // Tamanho da Linha 2, mm
font_name      = "Chewy:style=Regular";
letter_height  = 1.4;                 // Altura das letras em relevo, mm
base_height    = 12;                  // Altura da base, mm
outline_margin = 2.3;                 // Margem do contorno além do texto, mm
spacing        = 1.0;                 // Espaçamento entre letras (1.0 = normal)
line_spacing   = 1.0;                 // Fator de distância entre linhas

/*[Furação]*/
hole_type        = "CIRCLE";          // "CIRCLE" | "HEXAGON"
hole_orientation = "TOPBOTTOM";       // "TOPBOTTOM" | "FRONTBACK" | "NONE"
hole_diameter    = 7.8;               // mm
hole_length      = 150;               // comprimento do cilindro de corte, mm
hole_x           = 0;
hole_y           = 0;
hole_z           = base_height / 2;

/*[Cores]*/
base_color    = "#1B40D1";
letters_color = "#FFFFFF";

/*[Direção]*/
text_halign = "center";

// Constrói arrays efetivos a partir das variáveis individuais.
// Quando text_line_2 está vazio, opera com uma única linha.
_lines = text_line_2 == "" ? [text_line_1] : [text_line_1, text_line_2];
_sizes = text_line_2 == "" ? [text_size_1] : [text_size_1, text_size_2];

// ── Posição Y de cada linha (centraliza o conjunto verticalmente) ─────────
function _line_y(i) =
    (len(_lines) == 1) ? 0 :
    (i == 0) ?  (_sizes[1] * line_spacing * 0.6) :
               -(_sizes[0] * line_spacing * 0.6);

// ── Base com túnel de furação ─────────────────────────────────────────────
module base_with_tunnel() {
    difference() {
        linear_extrude(height = base_height)
            offset(r = outline_margin, $fn = 60)
                for (i = [0 : len(_lines) - 1])
                    translate([0, _line_y(i), 0])
                        text(_lines[i], size = _sizes[i], font = font_name,
                             halign = text_halign, valign = "center",
                             spacing = spacing);

        if (hole_orientation == "FRONTBACK") {
            translate([0, hole_y, hole_z])
                rotate([0, 90, 0])
                    cylinder(d = hole_diameter, h = hole_length, center = true,
                             $fn = (hole_type == "HEXAGON") ? 6 : 100);
        } else if (hole_orientation == "TOPBOTTOM") {
            translate([hole_x, 0, hole_z])
                rotate([90, 0, 0])
                    cylinder(d = hole_diameter, h = hole_length, center = true,
                             $fn = (hole_type == "HEXAGON") ? 6 : 100);
        }
    }
}

// ── Letras em relevo ──────────────────────────────────────────────────────
module raised_letters() {
    translate([0, 0, base_height])
        linear_extrude(height = letter_height)
            for (i = [0 : len(_lines) - 1])
                translate([0, _line_y(i), 0])
                    text(_lines[i], size = _sizes[i], font = font_name,
                         halign = text_halign, valign = "center",
                         spacing = spacing);
}

// ── Dispatcher de partes (injetado via -D part="...") ────────────────────
part = "all";

if (part == "all") {
    color(base_color)    base_with_tunnel();
    color(letters_color) raised_letters();
} else if (part == "base") {
    color(base_color) base_with_tunnel();
} else if (part == "letters") {
    color(letters_color) raised_letters();
}
