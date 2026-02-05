import { initViewer, updateMesh, downloadSTL } from './viewer.js';
import { initManifold, generateTextModel } from './engine.js';

// DOM Elements
const els = {
    line1: document.getElementById('textLine1'),
    fontSelect: document.getElementById('fontSelect'),
    letterSpacing: document.getElementById('letterSpacing'),
    fontThickness: document.getElementById('fontThickness'),
    thicknessValue: document.getElementById('fontThicknessValue'),
    size: document.getElementById('fontSize'),
    height: document.getElementById('height'),
    holeDiameter: document.getElementById('holeDiameter'),
    holeType: document.getElementById('holeType'),
    holeOrientation: document.getElementById('holeOrientation'),
    btnGen: document.getElementById('btnGenerate'),
    btnDown: document.getElementById('btnDownload'),
    status: document.getElementById('status'),
    loading: document.getElementById('loadingOverlay'),
    loadingText: document.getElementById('loadingText')
};

// Available Fonts (Stable TTF URLs)
const FONTS = {
    'Roboto': 'https://fonts.gstatic.com/s/roboto/v50/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiA8.ttf',
    'Pacifico': 'https://fonts.gstatic.com/s/pacifico/v23/FwZY7-Qmy14u9lezJ-6H6Mw.ttf',
    'Montserrat': 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aX8.ttf',
    'Bangers': 'https://fonts.gstatic.com/s/bangers/v25/FeVQS0BTqb0h60ACH55Q3Q.ttf',
    'Anton': 'https://fonts.gstatic.com/s/anton/v27/1Ptgg87LROyAm3Kz-Co.ttf',
    'Dancing Script': 'https://fonts.gstatic.com/s/dancingscript/v29/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup5.ttf',
    'Fredoka One': 'https://fonts.gstatic.com/s/fredokaone/v15/k3kUo8kEI-tA1RRcTZGmTlHGCaI.ttf',
    'Lobster': 'https://fonts.gstatic.com/s/lobster/v32/neILzCirqoswsqX9zoKmNg.ttf',
    'Playfair Display': 'https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf'
};

/**
 * Debounce helper
 */
function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

async function app() {
    try {
        // 1. Init Viewer (Three.js)
        initViewer(document.getElementById('viewer'));

        // 2. Init Manifold & Fonts
        setLoading("Iniciando Motor 3D...", true);
        await initManifold();

        // Initial font load
        await loadFont(els.fontSelect.value);
        setLoading("Pronto", false);

        // 3. Bind Events
        els.btnGen.addEventListener('click', () => generate(true));
        els.btnDown.addEventListener('click', () => downloadSTL("enfeite-3d"));

        // Live Preview Bindings
        const debouncedGenerate = debounce(() => generate(false), 400);

        // Inputs triggering generate
        [els.line1, els.size, els.height, els.holeDiameter, els.holeType, els.holeOrientation, els.letterSpacing, els.fontThickness]
            .forEach(el => el.addEventListener('input', () => {
                if (el === els.fontThickness) {
                    els.thicknessValue.innerText = el.value + "mm";
                }
                debouncedGenerate();
            }));

        // Font change triggering load then generate
        els.fontSelect.addEventListener('change', async () => {
            setLoading("Trocando fonte...", true);
            await loadFont(els.fontSelect.value);
            setLoading("Pronto", false);
            generate(false);
        });

        // Generate initial model
        generate(false);

    } catch (e) {
        console.error("Fatal Error:", e);
        setLoading("Erro Fatal: " + e.message, true);
    }
}

async function loadFont(fontName) {
    const url = FONTS[fontName] || FONTS['Roboto'];
    const { initManifold: loadFontInEngine } = await import('./engine.js');
    // We repurpose initManifold or use a dedicated method
    await loadFontInEngine(url);
}

async function generate(showOverlay = false) {
    if (showOverlay) setLoading("Gerando geometria...", true);
    else if (els.status) els.status.innerText = "Atualizando...";

    // Allow UI to update before heavy work
    requestAnimationFrame(async () => {
        try {
            const params = {
                text: els.line1.value || "Vinicius",
                size: parseFloat(els.size.value) || 20,
                height: Math.max(10, parseFloat(els.height.value) || 12),
                holeDiameter: parseFloat(els.holeDiameter.value) || 7.5,
                holeType: els.holeType.value,
                holeOrientation: els.holeOrientation.value,
                letterSpacing: parseFloat(els.letterSpacing.value) || 0,
                fontThickness: parseFloat(els.fontThickness.value) || 0,
                fontName: els.fontSelect.value
            };

            const mesh = await generateTextModel(params);

            if (mesh) {
                updateMesh(mesh);
                els.btnDown.disabled = false;
                setLoading("Modelo Pronto!", false);
            } else {
                setLoading("Erro: Geometria vazia.", false);
            }

        } catch (e) {
            console.error("Generate Error:", e);
            setLoading("Erro: " + e.message, false);
        }
    });
}

function setLoading(msg, showOverlay) {
    if (els.status) els.status.innerText = msg;
    if (els.loadingText) els.loadingText.innerText = msg;
    if (els.loading) els.loading.style.display = showOverlay ? 'flex' : 'none';
}

// Start
app();
