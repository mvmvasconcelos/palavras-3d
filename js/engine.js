import manifoldModule from 'manifold-3d';
import opentype from 'opentype.js';

let manifold, CrossSection;
let font;

const FONT_URL = "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxM.woff";

export async function initManifold() {
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

    try {
        const res = await fetch(FONT_URL);
        const buffer = await res.arrayBuffer();
        font = opentype.parse(buffer);
        console.log("3D Engine & Font Ready.");
    } catch (e) {
        console.error("Initialization error:", e);
    }
}

export async function generateTextModel(params) {
    if (!manifold || !font) throw new Error("Engine not initialized");

    const text = (params.text || "").trim();
    if (!text) return null;

    const size = Number(params.size) || 20;
    const height = Number(params.height) || 5;

    // 1. Get Path
    const path = font.getPath(text, 0, 0, size);

    // 2. Convert to Polygons and Ensure CCW (Counter-Clockwise)
    // Manifold 2.5 requires CCW winding for solid areas.
    let polygons = pathToPolygons(path).map(p => forceCCW(p));

    if (polygons.length === 0) return null;

    // 3. Create CrossSection
    let cs;
    try {
        // Use EvenOdd (1) fill rule to handle holes in letters (a, o, e, etc.)
        cs = CrossSection.ofPolygons(polygons, 1);

        // Fallback to NonZero (0) if EvenOdd yields empty geometry
        if (cs.isEmpty()) {
            cs = CrossSection.ofPolygons(polygons, 0);
        }
    } catch (e) {
        console.error("CAD Generation Error:", e);
        return null;
    }

    if (cs.isEmpty()) return null;

    // 4. Centering
    const b = cs.bounds();
    if (isFiniteCoord(b.min)) {
        const mx = (getVal(b.min, 0) + getVal(b.max, 0)) / 2;
        const my = (getVal(b.min, 1) + getVal(b.max, 1)) / 2;
        cs = cs.translate([-mx, -my]);
    }

    // 5. Extrude to 3D
    const model = cs.extrude(height);
    const mesh = model.getMesh();

    // Clean up WASM memory
    if (cs.delete) cs.delete();

    return mesh;
}

/**
 * Calculates polygon area to determine winding order.
 * Reverses points if necessary to ensure Counter-Clockwise (CCW).
 */
function forceCCW(poly) {
    if (poly.length < 3) return poly;
    let area = 0;
    for (let i = 0; i < poly.length; i++) {
        const j = (i + 1) % poly.length;
        area += poly[i][0] * poly[j][1];
        area -= poly[j][0] * poly[i][1];
    }
    // area > 0 is CCW in standard Cartesian space.
    // Our Y is flipped in pathToPolygons, so area < 0 would be CW.
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

function pathToPolygons(path) {
    const polys = [];
    let cur = [];
    let x = 0, y = 0, sx = 0, sy = 0;

    function add(px, py) {
        const nx = Number(px.toFixed(4));
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
                    // Remove explicit closure for Manifold
                    const f = cur[0]; const l = cur[cur.length - 1];
                    if (f[0] === l[0] && f[1] === l[1]) cur.pop();
                    if (cur.length >= 3) polys.push(cur);
                }
                cur = [];
                add(cmd.x, cmd.y);
                x = cmd.x; y = cmd.y; sx = cmd.x; sy = cmd.y;
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
