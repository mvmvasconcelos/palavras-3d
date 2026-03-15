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

/*[Posicionamento por caractere — injetado pelo backend]*/
// O backend calcula os advance widths reais da fonte e injeta as posições X de cada
// caractere. Cada letra é então extrudada individualmente em 3D, evitando o problema
// de furos gerado pela regra even-odd do OpenSCAD em fontes com letras sobrepostas.
chars1   = "";   // Texto da linha 1, ex: "ALICE"
char_xs1 = [];   // Posições X de cada char (halign=left), ex: [-14.0, -9.0, ...]
chars2   = "";   // Texto da linha 2 (vazio = não usa)
char_xs2 = [];

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

// Arrays de linhas/tamanhos para cálculo de posição vertical
_lines = text_line_2 == "" ? [text_line_1] : [text_line_1, text_line_2];
_sizes = text_line_2 == "" ? [text_size_1] : [text_size_1, text_size_2];

// ── Posição Y de cada linha (centraliza o conjunto verticalmente) ─────────
function _line_y(i) =
    (len(_lines) == 1) ? 0 :
    (i == 0) ?  (_sizes[1] * line_spacing * 0.6) :
               -(_sizes[0] * line_spacing * 0.6);

// ── Base: usa text() completo + outline_margin ────────────────────────────
// outline_margin (2.3mm) expande a silhueta, cobrindo qualquer gap de even-odd.
// Para a base, apenas a silhueta externa importa.
module base_2d() {
    for (i = [0 : len(_lines) - 1])
        translate([0, _line_y(i), 0])
            text(_lines[i], size = _sizes[i], font = font_name,
                 halign = text_halign, valign = "center", spacing = spacing);
}

module base_with_tunnel() {
    difference() {
        linear_extrude(height = base_height)
            offset(r = outline_margin, $fn = 60)
                base_2d();

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

// ── Letras em relevo: um extrude por caractere ────────────────────────────
// Cada character é extrudado como sólido 3D independente.
// Sólidos 3D sobrepostos se unem naturalmente — sem regra even-odd.
// y = centro visual desejado (equivalente ao valign="center").
// baseline = y - sz/2  →  alinha todas as letras na mesma linha de base
// sem depender da bbox individual de cada glifo.
module _one_char(ch_code, x, y, sz) {
    translate([x, y - sz/2, 0])
        linear_extrude(height = letter_height)
            text(ch_code, size = sz, font = font_name,
                 halign = "left", valign = "baseline");
}

module raised_letters() {
    translate([0, 0, base_height]) {
        if (len(chars1) > 0) {
            // Linha 1: per-character (sem even-odd)
            for (i = [0 : len(chars1) - 1])
                if (i < len(char_xs1))
                    _one_char(chars1[i], char_xs1[i], _line_y(0), text_size_1);
            // Linha 2 (opcional)
            if (len(chars2) > 0)
                for (i = [0 : len(chars2) - 1])
                    if (i < len(char_xs2))
                        _one_char(chars2[i], char_xs2[i], _line_y(1), text_size_2);
        } else {
            // Fallback: text() convencional (caso backend não injete posições)
            for (i = [0 : len(_lines) - 1])
                translate([0, _line_y(i), 0])
                    linear_extrude(height = letter_height)
                        text(_lines[i], size = _sizes[i], font = font_name,
                             halign = text_halign, valign = "center", spacing = spacing);
        }
    }
}

// ── Dispatcher de partes ──────────────────────────────────────────────────
part = "all";

if (part == "all") {
    color(base_color)    base_with_tunnel();
    color(letters_color) raised_letters();
} else if (part == "base") {
    color(base_color) base_with_tunnel();
} else if (part == "letters") {
    color(letters_color) raised_letters();
}
