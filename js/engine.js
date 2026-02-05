import manifoldModule from 'manifold-3d';
import opentype from 'opentype.js';

let manifold, CrossSection;
let font;
let currentFontUrl = "";

const ROBOTO_URL = "https://fonts.gstatic.com/s/roboto/v50/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiA8.ttf";

export async function initManifold(fontUrl = ROBOTO_URL) {
    if (!manifold) {
        manifold = await manifoldModule({
            locateFile: (path) => {
                if (path.endsWith('.wasm')) {
                    return `https://cdn.jsdelivr.net/npm/manifold-3d@2.5.1/manifold.wasm`;
                }
                return path;
            }
        });
        if (manifold.setup) manifold.setup();
        CrossSection = manifold.CrossSection;
    }

    if (currentFontUrl !== fontUrl) {
        try {
            const res = await fetch(fontUrl);
            const buffer = await res.arrayBuffer();
            font = opentype.parse(buffer);
            currentFontUrl = fontUrl;
            console.log("v2.8 Engine - Font Updated: " + fontUrl);
        } catch (e) {
            console.error("Font loading error:", e);
        }
    }
}

export async function generateTextModel(params) {
    if (!manifold || !font) throw new Error("Engine not initialized");

    const text = (params.text || "").trim();
    if (!text) return null;

    const size = Number(params.size) || 20;
    const height = Math.max(10, Number(params.height) || 12);
    const spacing = Number(params.letterSpacing) || 0;
    const thickness = Number(params.fontThickness) || 0;

    // --- MODE SELECTION & CONSTRUCTION ---
    let textModel = null;
    let baseModel = null;
    let combinedBounds = { min: [0, 0], max: [0, 0] };

    if (params.mode === 'wave') {
        const randIntensity = Number(params.randomHeight) || 0;
        const slant = Number(params.slantRange) || 0;

        let charModels = [];
        let curX = 0;
        let globalMin = [Infinity, Infinity];
        let globalMax = [-Infinity, -Infinity];

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const glyph = font.charToGlyph(char);
            const glyphPath = glyph.getPath(0, 0, size);

            const charPolys = pathToPolygons(glyphPath, 0);
            if (charPolys.length === 0) {
                curX += font.getAdvanceWidth(char, size) + spacing;
                continue;
            }

            // Pseudo-random factor based on index (0 to 1)
            const randFactor = (Math.abs(Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1);
            const charHeight = height + (randFactor * randIntensity);

            let charCS = CrossSection.ofPolygons(charPolys.map(forceCCW), 1);
            if (thickness !== 0) {
                const offset = charCS.offset(thickness, 1, 2.0);
                charCS.delete();
                charCS = offset;
            }

            let charM = charCS.extrude(charHeight);

            // Rotation around Z (tilting letters sideways)
            if (slant !== 0) {
                const rotation = (slant * Math.PI / 180) * Math.cos(i * 1.5);
                charM = charM.rotate([0, 0, rotation * (180 / Math.PI)]);
            }

            // Apply translation (Horizontal position, grounded at Z=0)
            charM = charM.translate([curX, 0, 0]);

            // Track 2D bounds for hole alignment 
            const charBounds = charCS.bounds();
            globalMin[0] = Math.min(globalMin[0], curX + getVal(charBounds.min, 0));
            globalMax[0] = Math.max(globalMax[0], curX + getVal(charBounds.max, 0));
            globalMin[1] = Math.min(globalMin[1], getVal(charBounds.min, 1));
            globalMax[1] = Math.max(globalMax[1], getVal(charBounds.max, 1));

            charCS.delete();
            charModels.push(charM);
            curX += font.getAdvanceWidth(char, size) + spacing;
        }

        if (charModels.length === 0) return null;
        combinedBounds = { min: globalMin, max: globalMax };

        textModel = charModels[0];
        for (let i = 1; i < charModels.length; i++) {
            const next = textModel.add(charModels[i]);
            textModel.delete();
            charModels[i].delete();
            textModel = next;
        }
    } else {
        let allPolys = [];
        let curX = 0;
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const charPolys = pathToPolygons(font.charToGlyph(char).getPath(0, 0, size), curX);
            charPolys.forEach(p => allPolys.push(forceCCW(p)));
            curX += font.getAdvanceWidth(char, size) + spacing;
        }

        let cs = CrossSection.ofPolygons(allPolys, 1);
        if (thickness !== 0) {
            const offset = cs.offset(thickness, 1, 2.0);
            cs.delete();
            cs = offset;
        }

        if (params.mode === 'contour') {
            const baseOffset = parseFloat(params.baseOffset) || 3.0;
            const textProtrusion = parseFloat(params.textProtrusion) || 3.0;

            const baseCS = cs.offset(baseOffset, 1, 2.0);
            const b = baseCS.bounds();
            combinedBounds = { min: [getVal(b.min, 0), getVal(b.min, 1)], max: [getVal(b.max, 0), getVal(b.max, 1)] };

            baseModel = baseCS.extrude(height);
            baseCS.delete();
            textModel = cs.extrude(height + textProtrusion);
        } else {
            const b = cs.bounds();
            combinedBounds = { min: [getVal(b.min, 0), getVal(b.min, 1)], max: [getVal(b.max, 0), getVal(b.max, 1)] };
            textModel = cs.extrude(height);
        }
        cs.delete();
    }

    // --- HOLE SYSTEM ---
    const holeModel = createHole(params, combinedBounds, height);

    // --- FINAL SUBTRACTION & RESULT ---
    let textMesh = null;
    let baseMesh = null;

    if (params.mode === 'contour' && baseModel) {
        const finalBase = baseModel.subtract(holeModel);
        const finalText = textModel.subtract(holeModel);

        baseMesh = finalBase.getMesh();
        textMesh = finalText.getMesh();

        finalBase.delete();
        finalText.delete();
        baseModel.delete();
        textModel.delete();
    } else {
        const finalModel = textModel.subtract(holeModel);
        textMesh = finalModel.getMesh();

        finalModel.delete();
        textModel.delete();
    }

    holeModel.delete();

    return { textMesh, baseMesh };
}

// Factor out Hole construction for cleaner main flow
function createHole(params, bounds, height) {
    const holeDia = Number(params.holeDiameter) || 7.5;
    const holeType = params.holeType || 'circle';
    const holeOrient = params.holeOrientation || 'horizontal';
    const holeRad = holeDia / 2;

    let holeCS;
    if (holeType === 'circle') {
        holeCS = CrossSection.circle(holeRad, 32);
    } else if (holeType === 'hex') {
        const hexRad = holeRad / Math.cos(Math.PI / 6);
        holeCS = CrossSection.circle(hexRad, 6);
    } else if (holeType === 'square') {
        const squareRad = (holeDia / 2) * Math.sqrt(2);
        holeCS = CrossSection.circle(squareRad, 4).rotate(45);
    } else if (holeType === 'triangle') {
        const triRad = holeDia / Math.sqrt(3);
        holeCS = CrossSection.circle(triRad, 3).rotate(90);
    } else {
        holeCS = CrossSection.circle(holeRad, 32);
    }

    const midX = (bounds.min[0] + bounds.max[0]) / 2;
    const midY = (bounds.min[1] + bounds.max[1]) / 2;
    const holeLength = Math.max(300, bounds.max[0] * 2);

    let holeModel = holeCS.extrude(holeLength).translate([0, 0, -holeLength / 2]);
    holeCS.delete();

    if (holeOrient === 'horizontal') {
        holeModel = holeModel.rotate([0, 90, 0]).translate([midX, midY, height / 2]);
    } else {
        holeModel = holeModel.rotate([90, 0, 0]).translate([midX, midY, height / 2]);
    }

    return holeModel;
}

function forceCCW(poly) {
    if (poly.length < 3) return poly;
    let area = 0;
    for (let i = 0; i < poly.length; i++) {
        const j = (i + 1) % poly.length;
        area += poly[i][0] * poly[j][1];
        area -= poly[j][0] * poly[i][1];
    }
    if (area < 0) return poly.reverse();
    return poly;
}

function getVal(v, i) {
    if (Array.isArray(v)) return v[i];
    return i === 0 ? (v.x ?? 0) : (v.y ?? 0);
}

function isFiniteCoord(v) {
    if (!v) return false;
    const x = getVal(v, 0);
    return typeof x === 'number' && isFinite(x);
}

function pathToPolygons(path, offsetX = 0) {
    const polys = [];
    let cur = [];
    let x = 0, y = 0;

    function add(px, py) {
        // Apply historical text alignment fixes and the new horizontal offset
        const nx = Number((px + offsetX).toFixed(4));
        const ny = Number((-py).toFixed(4));
        if (cur.length > 0) {
            const last = cur[cur.length - 1];
            if (last[0] === nx && last[1] === ny) return;
        }
        cur.push([nx, ny]);
    }

    path.commands.forEach(cmd => {
        switch (cmd.type) {
            case 'M':
                if (cur.length >= 3) {
                    const f = cur[0]; const l = cur[cur.length - 1];
                    if (f[0] === l[0] && f[1] === l[1]) cur.pop();
                    if (cur.length >= 3) polys.push(cur);
                }
                cur = [];
                add(cmd.x, cmd.y);
                x = cmd.x; y = cmd.y;
                break;
            case 'L':
                add(cmd.x, cmd.y);
                x = cmd.x; y = cmd.y;
                break;
            case 'Q': {
                const steps = 12;
                for (let i = 1; i <= steps; i++) {
                    const t = i / steps; const it = 1 - t;
                    add(it * it * x + 2 * it * t * cmd.x1 + t * t * cmd.x, it * it * y + 2 * it * t * cmd.y1 + t * t * cmd.y);
                }
                x = cmd.x; y = cmd.y;
                break;
            }
            case 'C': {
                const steps = 12;
                for (let i = 1; i <= steps; i++) {
                    const t = i / steps; const it = 1 - t; const it2 = it * it; const t2 = t * t;
                    add(it * it2 * x + 3 * it2 * t * cmd.x1 + 3 * it * t2 * cmd.x2 + t * t2 * cmd.x, it * it2 * y + 3 * it2 * t * cmd.y1 + 3 * it * t2 * cmd.y2 + t * t2 * cmd.y);
                }
                x = cmd.x; y = cmd.y;
                break;
            }
            case 'Z':
                if (cur.length >= 3) {
                    const f = cur[0]; const l = cur[cur.length - 1];
                    if (f[0] === l[0] && f[1] === l[1]) cur.pop();
                    if (cur.length >= 3) polys.push(cur);
                }
                cur = [];
                break;
        }
    });

    if (cur.length >= 3) {
        const f = cur[0]; const l = cur[cur.length - 1];
        if (f[0] === l[0] && f[1] === l[1]) cur.pop();
        if (cur.length >= 3) polys.push(cur);
    }
    return polys;
}
