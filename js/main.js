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
    holeTypeGroup: document.getElementById('holeTypeGroup'),
    holeOrientation: document.getElementById('holeOrientation'),
    btnGen: document.getElementById('btnGenerate'),
    btnDown: document.getElementById('btnDownload'),
    status: document.getElementById('status'),
    buildModeGroup: document.getElementById('buildModeGroup'),
    modo1Controls: document.getElementById('modo1Controls'),
    modo2Controls: document.getElementById('modo2Controls'),
    textHeight: document.getElementById('textHeight'),
    baseOffset: document.getElementById('baseOffset'),
    baseOffsetValue: document.getElementById('baseOffsetValue'),
    waveAmplitude: document.getElementById('waveAmplitude'),
    waveAmplitudeValue: document.getElementById('waveAmplitudeValue'),
    waveFrequency: document.getElementById('waveFrequency'),
    waveFrequencyValue: document.getElementById('waveFrequencyValue'),
    slantRange: document.getElementById('slantRange'),
    slantValue: document.getElementById('slantValue'),
    textColor: document.getElementById('textColor'),
    baseColor: document.getElementById('baseColor'),
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

        // 3. Build Mode Initialization
        let currentBuildMode = 'simple';
        const modeButtons = els.buildModeGroup.querySelectorAll('.type-btn');
        modeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentBuildMode = btn.dataset.value;

                // Toggle specific UI
                els.modo1Controls.style.display = (currentBuildMode === 'contour') ? 'block' : 'none';
                els.modo2Controls.style.display = (currentBuildMode === 'wave') ? 'block' : 'none';
                generate(false);
            });
        });

        // 4. Hole Type Group Initialization
        const typeButtons = els.holeTypeGroup.querySelectorAll('.type-btn');
        typeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const buttons = els.holeTypeGroup.querySelectorAll('.type-btn');
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                generate(false);
            });
        });

        // 5. Bind Events
        els.btnGen.addEventListener('click', () => generate(true));
        els.btnDown.addEventListener('click', () => downloadSTL("enfeite-3d"));

        // Live Preview Bindings
        const debouncedGenerate = debounce(() => generate(false), 400);

        // Inputs triggering generate
        [els.line1, els.size, els.height, els.textHeight, els.baseOffset, els.holeDiameter, els.holeOrientation, els.letterSpacing, els.fontThickness, els.textColor, els.baseColor,
        els.waveAmplitude, els.waveFrequency, els.slantRange]
            .forEach(el => el.addEventListener('input', () => {
                if (el === els.fontThickness) {
                    els.thicknessValue.innerText = parseFloat(el.value).toFixed(1) + "mm";
                }
                if (el === els.baseOffset) {
                    els.baseOffsetValue.innerText = parseFloat(el.value).toFixed(1) + "mm";
                }
                if (el === els.waveAmplitude) {
                    els.waveAmplitudeValue.innerText = parseFloat(el.value).toFixed(1) + "mm";
                }
                if (el === els.waveFrequency) {
                    els.waveFrequencyValue.innerText = parseFloat(el.value).toFixed(1);
                }
                if (el === els.slantRange) {
                    els.slantValue.innerText = el.value + "°";
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
                holeType: els.holeTypeGroup.querySelector('.active').dataset.value,
                holeOrientation: els.holeOrientation.value,
                letterSpacing: parseFloat(els.letterSpacing.value) || 0,
                fontThickness: parseFloat(els.fontThickness.value) || 0,
                fontName: els.fontSelect.value,
                // Modo 1
                mode: els.buildModeGroup.querySelector('.active').dataset.value,
                baseOffset: parseFloat(els.baseOffset.value) || 3.0,
                textProtrusion: parseFloat(els.textHeight.value) || 3.0,
                // Modo 2
                waveAmplitude: parseFloat(els.waveAmplitude.value) || 0,
                waveFrequency: parseFloat(els.waveFrequency.value) || 1,
                slantRange: parseFloat(els.slantRange.value) || 0
            };

            const meshData = await generateTextModel(params);

            if (meshData && (meshData.textMesh || meshData.baseMesh)) {
                updateMesh(meshData, els.textColor.value, els.baseColor.value);
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
