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

    // --- SINGLE PASS POLYGON COLLECTION ---
    // Instead of unioning CrossSections (unstable), we collect ALL polygons
    // into one list and create the CAD object in one go.
    let allPolys = [];
    let curX = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const glyph = font.charToGlyph(char);

        // Get path at origin (0,0), we will offset the points manually
        const glyphPath = glyph.getPath(0, 0, size);
        const charPolys = pathToPolygons(glyphPath, curX); // Pass curX to offset points

        if (charPolys.length > 0) {
            // Force Winding and add to master list
            charPolys.forEach(p => allPolys.push(forceCCW(p)));
        }

        // Advance cursor
        const advance = font.getAdvanceWidth(char, size);
        curX += advance + spacing;
    }

    if (allPolys.length === 0) return null;

    console.log(`- v2.8: Collected ${allPolys.length} polygons for "${text}"`);

    // --- CAD CONSTRUCTION ---
    let cs;
    try {
        cs = CrossSection.ofPolygons(allPolys, 1); // Use EvenOdd rule

        if (cs.isEmpty()) {
            console.warn("- EvenOdd empty, trying NonZero...");
            cs = CrossSection.ofPolygons(allPolys, 0);
        }

        // Apply Thickness (Offset) to the whole word at once
        if (thickness !== 0) {
            const offsetCS = cs.offset(thickness, 1, 2.0);
            cs.delete();
            cs = offsetCS;
        }
    } catch (e) {
        console.error("- CAD Construction Crash:", e);
        return null;
    }

    if (cs.isEmpty()) {
        cs.delete();
        return null;
    }

    // --- CENTERING ---
    const b = cs.bounds();
    if (isFiniteCoord(b.min)) {
        const mx = (getVal(b.min, 0) + getVal(b.max, 0)) / 2;
        const my = (getVal(b.min, 1) + getVal(b.max, 1)) / 2;
        cs = cs.translate([-mx, -my]);
    }

    const textModel = cs.extrude(height);

    // --- HOLE LOGIC ---
    const holeDia = Number(params.holeDiameter) || 7.5;
    const holeType = params.holeType || 'circle';
    const holeOrient = params.holeOrientation || 'horizontal';

    const holeRad = holeDia / 2;
    const segments = holeType === 'hex' ? 6 : 32;
    let holeCS = CrossSection.circle(holeRad, segments);

    if (holeType === 'hex') {
        const hexRad = holeRad / Math.cos(Math.PI / 6);
        holeCS.delete();
        holeCS = CrossSection.circle(hexRad, 6);
    }

    const holeLength = Math.max(300, curX * 2);
    let holeModel = holeCS.extrude(holeLength).translate([0, 0, -holeLength / 2]);

    if (holeOrient === 'horizontal') {
        holeModel = holeModel.rotate([0, 90, 0]).translate([0, 0, height / 2]);
    } else {
        holeModel = holeModel.rotate([90, 0, 0]).translate([0, 0, height / 2]);
    }

    // --- SUBTRACTION ---
    const finalModel = textModel.subtract(holeModel);
    const mesh = finalModel.getMesh();

    // Final Cleanup
    cs.delete();
    holeCS.delete();
    textModel.delete();
    holeModel.delete();
    finalModel.delete();

    return mesh;
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
