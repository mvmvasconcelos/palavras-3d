# Guia de Desenvolvimento: Manifold-3D & Fontes

Este documento serve como uma base de conhecimento para futuros projetos 3D baseados neste motor (Manifold-3D + OpenType.js).

## 1. Desafios Enfrentados e Soluções

### 📌 Ordem de Enrolamento (Winding Order)
**Problema:** O Manifold-3D exige que polígonos externos sejam CCW (Counter-Clockwise/Anti-horário). Se a ordem estiver errada, a malha buga (fica invisível ou com furos invertidos).
**Solução:** Implementamos a função `forceCCW` usando a fórmula de *Shoelace*. Ela calcula a área do polígono e inverte os pontos se for necessário.
**Recomendação:** Sempre valide a orientação de cada letra/forma antes de passá-la para o `CrossSection`.

### 📌 Fechamento Implícito de Polígonos
**Problema:** Muitos motores esperam que o último ponto repita o primeiro (Ex: P1, P2, P3, P1). O Manifold via WASM prefere fechamento implícito (Ex: P1, P2, P3). Duplicatas no final podem causar erros de geometria vazia.
**Solução:** No `pathToPolygons`, verificamos se o último ponto é igual ao primeiro e removemos a duplicata (`cur.pop()`).

### 📌 Estabilidade da Montagem 3D
**Problema:** Inicialmente, tentamos unir as letras uma a uma usando `combinedCS.union(charCS)`. Isso causou erros de `TypeError` e instabilidade de memória no WASM.
**Solução:** Mudamos para uma **Estratégia de Passagem Única**. Coletamos todos os polígonos de todas as letras em um único array gigante e criamos o `CrossSection` uma única vez.
**Recomendação:** Evite operações booleanas repetitivas dentro de loops. É preferível construir uma "planta" (polígonos) completa e gerar o 3D no final.

### 📌 Gerenciamento de Memória WASM
**Problema:** Objetos do Manifold (CrossSection, Mesh, Model) não são limpos automaticamente pelo Garbage Collector do JavaScript. Eles vivem na memória do C++ (WASM).
**Solução:** Uso rigoroso do método `.delete()` em todos os objetos temporários.
**Recomendação:** Se o site começar a travar após muitos "Previews", verifique se algum objeto não foi deletado.

## 2. Recomendações Técnicas

### 📏 Escala e Unidades
*   Utilize **Milímetros** como base.
*   No Three.js, o grid deve ter subdivisões de 10 unidades (equivalente a 10mm ou 1cm) para dar noção de escala real ao usuário.
*   **Precisão:** Use `.toFixed(4)` ao converter caminhos de fontes para polígonos para evitar problemas de arredondamento no motor de intersecção.

### 🔡 Tipografia e Fontes
*   **Fontes Manuscritas:** Têm caminhos que se cruzam. Use a regra de preenchimento **EvenOdd (1)** no `CrossSection.ofPolygons(polys, 1)` para lidar com as intersecções corretamente.
*   **Links de Fontes:** Use links diretos para arquivos **.ttf** brutos em vez de APIs de CSS quando estiver usando `opentype.js` no navegador. Isso evita erros de CORS e redirecionamentos.

### ⚡ Performance & Viewport
*   **Debounce:** Sempre utilize um atraso de ~400ms nos inputs. Gerar 3D a cada tecla causa lentidão severa.
*   **Câmera Ortográfica:** Em aplicações de CAD/3D Printing, a perspectiva distorce as bordas (efeito olho de peixe). O uso de `OrthographicCamera` garante que alinhamentos e escalas sejam visualmente precisos de qualquer ângulo.
*   **Z-Up:** O sistema deve sempre usar `camera.up.set(0, 0, 1)` para alinhar o visualizador com o plano de construção (X-Y) das fatiadoras 3D.

### 📐 Lógica de Alturas (Modo 2)
*   **Determinismo:** Evite variações puramente aleatórias (`Math.random()`) em modelos que precisam de validação física. 
*   **Lógica Par/Ímpar:** O uso de módulo (`i % 2`) para alternar alturas garante um ritmo visual estável e facilita o cálculo automático do furo central (Hole System), que pode ser posicionado na média das alturas de forma previsível.

## 3. Estrutura Proposta para Novos Modelos
Ao criar um novo modelo (Ex: Base de Abajur, chaveiro):
1.  Defina as "Plantas" em 2D usando polígonos.
2.  Aplique offsets (`.offset()`) para espessura.
3.  Extruda para 3D.
4.  Realize subtrações booleanas (furos, encaixes) como passo final.

---
*Documentação v1.0 - Referência para Palavras-3D.*
