// Variáveis que serão substituídas pelo injetor do backend
shape_type = "circle"; // "circle", "square", "hexagon"
inner_size = 50; // Tamanho interno (diâmetro ou aresta)
wall_thickness = 3.0;
height = 22;
brim_width = 3.0; // Largura extra que o brim avança pra fora (borda do cogumelo)
brim_height = 3.0; // Espessura vertical do brim

// Booleano recebido pelo toggle do Front-End (true = afiado, false = reto)
sharp_edge = true;

// Medidas fixas embutidas para quando a borda afiada está ativada
chamfer_height = 3.0; // Altura do chanfro na borda afiada que corta a massa
blade_thickness = 0.4; // Espessura real do topo/fio da lâmina

part = "all";

// Resolução fina
$fn = 120;

// MÓDULO BASE 2D: Desenha a forma plana principal escolhida já deslocando-a para que a bota EXTERNA inicie em 0,0
module base_shape_2d(size) {
    // Calculamos o quanto a borda do objeto vai inchar além da medida orginal (para a esquerda e para baixo)
    total_thickness = wall_thickness + brim_width;
    
    // O translate compensa esse "inchaço" negativo, além de trazer as formas circulares que começam no zero para o quadrante positivo
    if (shape_type == "circle" || shape_type == "hexagon") {
        translate([size/2 + total_thickness, size/2 + total_thickness]) {
            if (shape_type == "circle") {
                circle(d=size);
            } else {
                circle(d=size, $fn=6);
            }
        }
    } else if (shape_type == "square") {
        // O `square()` sem center=true já nasce com o canto esquerdo inferior no 0,0 do OpenSCAD.
        // Como o `offset()` de parede inchará ele para `X -espessura`, só precisamos empurrar no +espessura
        translate([total_thickness, total_thickness]) {
            square([size, size], center=false);
        }
    } else {
        // Fallback
        translate([size/2 + total_thickness, size/2 + total_thickness]) {
             circle(d=size);
        }
    }
}

// CORPO PRINCIPAL DO CORTADOR DE BISCOITO
module cookie_cutter() {
    
    // O Chanfro começa na altura total menos a altura do corte afiado
    chamfer_start_z = sharp_edge ? height - chamfer_height : height;

    // Diferença global: Corpo vs Furo passante
    difference() {
        
        union() {
            // 1. O Brim (Extensão 2D da Base + Offset para fora da Parede)
            linear_extrude(height = brim_height)
                offset(r = wall_thickness + brim_width, $fn=120)
                    base_shape_2d(inner_size);
            
            // 2. Parede Externa regular do Cortador (Parede até começar o chanfro)
            linear_extrude(height = chamfer_start_z)
                offset(r = wall_thickness, $fn=120)
                    base_shape_2d(inner_size);
                
            // 3. O Chanfro 3D (Borda de corte extrudada com Scale afiando a ponta)
            if(sharp_edge) {
                // Calculamos a proporção matemática do afinamento em relação à parede
                // Se a parede tem 3mm e a lâmina termina em 0.4mm, o topo será ~10% mais fino
                // (Tamanho total + Fio) / (Tamanho total + Parede)
                scale_factor = (inner_size/2 + blade_thickness) / (inner_size/2 + wall_thickness);
                
                translate([0, 0, chamfer_start_z])
                     linear_extrude(height = chamfer_height, scale=scale_factor)
                        offset(r = wall_thickness, $fn=120)
                            base_shape_2d(inner_size);
            }
        }
        
        // 4. CORTE INTERNO (O buraco orgânico negativo em 2D puxado pelo height extra)
        translate([0, 0, -2])
            linear_extrude(height = height + 5)
                base_shape_2d(inner_size);
    }
}
