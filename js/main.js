import { initViewer, updateMesh, downloadSTL } from './viewer.js';
import { initManifold, generateTextModel } from './engine.js';

// DOM Elements
const els = {
    line1: document.getElementById('textLine1'),
    size: document.getElementById('fontSize'),
    height: document.getElementById('height'),
    btnGen: document.getElementById('btnGenerate'),
    btnDown: document.getElementById('btnDownload'),
    status: document.getElementById('status'),
    loading: document.getElementById('loadingOverlay'),
    loadingText: document.getElementById('loadingText')
};

/**
 * Debounce helper to prevent excessive rendering calls
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
        setLoading("Carregando Motor 3D...", true);
        await initManifold();
        setLoading("Pronto", false);

        // 3. Bind Events
        els.btnGen.addEventListener('click', () => generate(true));
        els.btnDown.addEventListener('click', () => downloadSTL("meu-modelo"));

        // Live Preview Bindings
        const debouncedGenerate = debounce(() => generate(false), 400);
        els.line1.addEventListener('input', debouncedGenerate);
        els.size.addEventListener('input', debouncedGenerate);
        els.height.addEventListener('input', debouncedGenerate);

        // Generate initial model
        generate(false);

    } catch (e) {
        console.error("Fatal Error:", e);
        setLoading("Erro Fatal: " + e.message, true);
    }
}

async function generate(showOverlay = false) {
    if (showOverlay) setLoading("Gerando geometria...", true);
    else if (els.status) els.status.innerText = "Atualizando...";

    // Allow UI to update before heavy work
    requestAnimationFrame(async () => {
        try {
            const params = {
                text: els.line1.value || "Vinicius",
                size: parseFloat(els.size.value) || 30,
                height: parseFloat(els.height.value) || 5
            };

            const mesh = await generateTextModel(params);

            if (mesh) {
                updateMesh(mesh);
                els.btnDown.disabled = false;
                setLoading("Modelo Atualizado!", false);
            } else {
                setLoading("Falha ao gerar modelo.", false);
            }

        } catch (e) {
            console.error(e);
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
