// form.js - Dynamically builds the UI based on model config.json

const modelId = window.CURRENT_MODEL_ID || "name_topper";
const formContainer = document.getElementById('dynamic-form-container');
const generateBtn = document.getElementById('generateBtn');

let modelConfig = null;

// Registry of inputs for easy data recovery
const inputRegistry = {};

async function initForm() {
    try {
        const res = await fetch(`/api/models/${modelId}/config`);
        if (!res.ok) throw new Error("Failed to load model config");
        modelConfig = await res.json();

        buildUI(modelConfig);

        generateBtn.textContent = "Visualizar Modelo";
        generateBtn.disabled = false;

        // Trigger updates once built
        setTimeout(() => triggerUpdates(), 500);

    } catch (e) {
        formContainer.innerHTML = `<p style="color:red">Erro carregando painel: ${e.message}</p>`;
    }
}

function buildUI(config) {
    formContainer.innerHTML = '';

    if (config.parameters) {
        config.parameters.forEach(param => {
            formContainer.appendChild(createControlGroup(param));
        });
    }

    if (config.categories) {
        config.categories.forEach(cat => {
            const details = document.createElement('details');
            const summary = document.createElement('summary');
            summary.innerHTML = `<span class="accordion-icon">▶</span> ${cat.name}`;

            // Toggle icon animation logic
            details.addEventListener('toggle', (e) => {
                const icon = summary.querySelector('.accordion-icon');
                if (details.open) {
                    icon.style.transform = 'rotate(90deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            });

            details.appendChild(summary);

            cat.parameters.forEach(param => {
                details.appendChild(createControlGroup(param));
            });

            formContainer.appendChild(details);
        });
    }

    function createControlGroup(param) {
        const group = document.createElement('div');
        group.className = 'modern-input-wrapper';

        const label = document.createElement('label');
        label.textContent = param.label;
        group.appendChild(label);

        let inputElement;

        if (param.type === 'text') {
            inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.className = 'input-text';
            if (param.placeholder) inputElement.placeholder = param.placeholder;
            inputElement.value = param.default || '';
        }
        else if (param.type === 'number') {
            const wrapper = document.createElement('div');
            wrapper.className = 'range-input';
            inputElement = document.createElement('input');
            inputElement.type = 'number';
            if (param.min !== undefined) inputElement.min = param.min;
            if (param.max !== undefined) inputElement.max = param.max;
            if (param.step !== undefined) inputElement.step = param.step;
            inputElement.value = param.default || 0;
            wrapper.appendChild(inputElement);
            group.appendChild(wrapper);
        }
        else if (param.type === 'range') {
            const wrapper = document.createElement('div');
            wrapper.className = 'range-input';

            inputElement = document.createElement('input');
            inputElement.type = 'range';
            if (param.min !== undefined) inputElement.min = param.min;
            if (param.max !== undefined) inputElement.max = param.max;
            if (param.step !== undefined) inputElement.step = param.step;
            inputElement.value = param.default || 0;

            const span = document.createElement('span');
            span.id = `${param.id}-val`;
            span.textContent = param.default;

            inputElement.addEventListener('input', (e) => span.textContent = e.target.value);

            wrapper.appendChild(inputElement);
            wrapper.appendChild(span);
            group.appendChild(wrapper);
        }
        else if (param.type === 'select') {
            inputElement = document.createElement('select');
            param.options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.value;
                option.textContent = opt.label;
                if (opt.value === param.default) option.selected = true;
                inputElement.appendChild(option);
            });
        }
        else if (param.type === 'color') {
            inputElement = document.createElement('input');
            inputElement.type = 'color';
            inputElement.value = param.default || '#000000';
        }
        else if (param.type === 'checkbox') {
            inputElement = document.createElement('input');
            inputElement.type = 'checkbox';
            inputElement.style.width = 'auto';
            inputElement.style.height = 'auto';
            inputElement.style.marginTop = '10px';
            inputElement.style.transform = 'scale(1.3)';
            inputElement.style.cursor = 'pointer';
            inputElement.checked = !!param.default;
        }
        else if (param.type === 'font_select') {
            inputElement = document.createElement('select');
            inputElement.dataset.isFont = "true";

            const fontWrapper = document.createElement('div');
            fontWrapper.style.display = 'flex';
            fontWrapper.style.gap = '5px';
            inputElement.style.flexGrow = '1';

            fontWrapper.appendChild(inputElement);
            group.appendChild(fontWrapper);

            const subControls = document.createElement('div');
            subControls.style.marginTop = '8px';
            subControls.style.display = 'flex';
            subControls.style.gap = '15px';
            subControls.style.fontSize = '12px';

            subControls.innerHTML = `
            <label style="display:flex; align-items:center; cursor:pointer; margin:0; font-weight: normal; color: var(--text-secondary)">
                <input type="checkbox" id="font_bold" checked style="width:auto; margin-right:5px; height: auto;"> Negrito
            </label>
            <label style="display:flex; align-items:center; cursor:pointer; margin:0; font-weight: normal; color: var(--text-secondary)">
                <input type="checkbox" id="font_italic" style="width:auto; margin-right:5px; height: auto;"> Itálico
            </label>
        `;
            group.appendChild(subControls);

            inputRegistry['font_bold'] = subControls.querySelector('#font_bold');
            inputRegistry['font_italic'] = subControls.querySelector('#font_italic');
        }

        if (inputElement && inputElement.parentNode !== group && !inputElement.parentNode?.classList?.contains('range-input') && param.type !== 'font_select') {
            group.appendChild(inputElement);
        }

        if (inputElement) {
            inputElement.id = param.id;
            inputRegistry[param.id] = inputElement;

            inputElement.addEventListener('input', () => triggerUpdates());
            inputElement.addEventListener('change', () => triggerUpdates());
        }

        return group;
    }

    // Special logic to load fonts if any font_select exists
    const fontSelect = document.querySelector('select[data-is-font="true"]');
    if (fontSelect) {
        loadFontsHandler(fontSelect).then(() => {
            finalizeFormLoad();
        });
    } else {
        finalizeFormLoad();
    }
}

function finalizeFormLoad() {
    // After everything is set up, unlock button
    const btn = document.getElementById('generateBtn');
    if (btn) {
        btn.disabled = false;
        btn.textContent = "Visualizar Modelo";
    }

    // Auto-generate initial 3D model if viewer logic exists
    if (typeof window.triggerGeneration === 'function') {
        window.triggerGeneration();
    }
}

// Global expose for viewer.js to call
window.getFormData = function () {
    const data = {};
    for (const key in inputRegistry) {
        const el = inputRegistry[key];
        if (el.type === 'checkbox') {
            data[key] = el.checked;
        } else if (el.type === 'number' || el.type === 'range') {
            data[key] = parseFloat(el.value);
        } else {
            // If it's font select, we also need to pass its attributes
            data[key] = el.value;

            if (el.tagName === 'SELECT' && el.dataset.isFont === "true") {
                const opt = el.options[el.selectedIndex];
                if (opt && opt.dataset.filename) {
                    data['font_filename'] = opt.dataset.filename;
                }

                // Construct pseudo-name like Comic Neue:style=Bold for SCAD
                const family = el.value;
                const isBold = inputRegistry['font_bold']?.checked;
                const isItalic = inputRegistry['font_italic']?.checked;
                let style = "";
                if (isBold && isItalic) style = ":style=Bold Italic";
                else if (isBold) style = ":style=Bold";
                else if (isItalic) style = ":style=Italic";

                data['font_name'] = family + style;
            }
        }
    }
    return data;
}

// -------------------------
// REUSABLE FONT LOGIC
// -------------------------
const defaultFonts = [
    { name: "Comic Neue", family: "'Comic Neue', cursive", hasBold: true, hasItalic: false },
    { name: "Fredoka One", family: "'Fredoka One', cursive", hasBold: false, hasItalic: false },
    { name: "Chewy", family: "'Chewy', cursive", hasBold: false, hasItalic: false, filename: "Chewy-Regular.ttf" },
    { name: "Arial", family: "Arial, sans-serif", hasBold: true, hasItalic: true }
];

async function loadFontsHandler(selectEl) {
    let customFonts = [];
    try {
        const res = await fetch('/api/fonts');
        if (res.ok) customFonts = await res.json();
    } catch (e) { }

    selectEl.innerHTML = '';

    const addOpt = (f) => {
        const opt = document.createElement('option');
        opt.textContent = f.name;
        opt.value = f.name;
        opt.style.fontFamily = f.family;
        opt.dataset.hasBold = f.hasBold;
        opt.dataset.hasItalic = f.hasItalic;
        if (f.filename) opt.dataset.filename = f.filename;
        selectEl.appendChild(opt);
    };

    defaultFonts.forEach(addOpt);

    let styleRules = "";
    customFonts.forEach(f => {
        const cssFontFamily = `CustomFont_${f.filename.replace(/\\W/g, '')}`;
        styleRules += `@font-face { font-family: '${cssFontFamily}'; src: url('${f.url}') format('truetype'); }\n`;
        addOpt({ name: `📂 ${f.name}`, family: `'${cssFontFamily}', sans-serif`, hasBold: false, hasItalic: false, filename: f.filename });
    });

    let styleBlock = document.getElementById('custom-fonts-css');
    if (!styleBlock) {
        styleBlock = document.createElement('style');
        styleBlock.id = 'custom-fonts-css';
        document.head.appendChild(styleBlock);
    }
    styleBlock.textContent = styleRules;

    // Setup logic to disable bold/italic checkboxes if font doesn't support it
    selectEl.addEventListener('change', () => {
        const opt = selectEl.options[selectEl.selectedIndex];
        if (!opt) return;

        const boldCheck = inputRegistry['font_bold'];
        const italicCheck = inputRegistry['font_italic'];

        if (boldCheck) {
            boldCheck.disabled = !(opt.dataset.hasBold === "true");
            if (boldCheck.disabled) boldCheck.checked = false;
        }
        if (italicCheck) {
            italicCheck.disabled = !(opt.dataset.hasItalic === "true");
            if (italicCheck.disabled) italicCheck.checked = false;
        }
        triggerUpdates();
    });

    // First trigger
    selectEl.dispatchEvent(new Event('change'));
}

// -------------------------
// LOCAL STORAGE & 2D PREVIEW
// -------------------------

function triggerUpdates() {
    saveState();

    // 2D Preview logic specifically for Name Topper text features
    if (window.MODEL_FEATURES && window.MODEL_FEATURES.includes('preview2d')) {
        try {
            update2DPreview();
        } catch (e) {
            console.error("Failed to update 2D Preview:", e);
        }
    }
}

function saveState() {
    localStorage.setItem(`p3d_${modelId}_state`, JSON.stringify(window.getFormData()));
}

// 2D Preview reconstruction (Simplified)
function update2DPreview() {
    const data = window.getFormData();
    const previewContainer = document.getElementById('preview-2d-container');
    const textCtx = document.getElementById('preview-text');

    if (!previewContainer || !textCtx) return;

    // Check if it was initially hidden to trigger a WebGL resize event
    const wasHidden = previewContainer.style.display === 'none';
    previewContainer.style.display = 'flex';

    if (wasHidden) {
        window.dispatchEvent(new Event('resize'));
    }

    const line1 = data['text_line_1'] || "";
    const line2 = data['text_line_2'] || "";
    const size1 = parseFloat(data['text_size_1']) || 12;
    const size2 = parseFloat(data['text_size_2']) || 12;

    const family = data['font_name'] ? data['font_name'].split(':')[0] : "Arial";
    const isBold = inputRegistry['font_bold']?.checked;
    const isItalic = inputRegistry['font_italic']?.checked;

    const baseColor = data['base_color'] || "#1B40D1";
    const textColor = data['letters_color'] || "#FFFFFF";

    const outlineMargin = parseFloat(data['outline_margin']) || 2.3;
    const spacing = parseFloat(data['spacing']) || 1.0;
    const lineSpacingMult = parseFloat(data['line_spacing']) || 1.0;

    console.log("update2DPreview called with data:", data);

    textCtx.innerHTML = '';
    textCtx.style.display = 'flex';
    textCtx.style.flexDirection = 'column';
    textCtx.style.alignItems = 'center';
    textCtx.style.justifyContent = 'center';

    const scaleFactor = 6.0;

    function createLine(text, size) {
        const div = document.createElement('div');
        div.textContent = text || '\\u00A0';

        const fontSelect = inputRegistry['font_name'];
        let selectedFontFamily = `"${family}", "Comic Neue", cursive`;

        if (fontSelect && fontSelect.selectedOptions.length > 0) {
            const styleFont = fontSelect.selectedOptions[0].style.fontFamily;
            if (styleFont) selectedFontFamily = styleFont;
        }

        div.style.fontFamily = selectedFontFamily;
        div.style.fontWeight = isBold ? 'bold' : 'normal';
        div.style.fontStyle = isItalic ? 'italic' : 'normal';
        div.style.whiteSpace = "pre";
        div.style.color = textColor;
        div.style.webkitTextStroke = `${outlineMargin * 1.5}px ${baseColor}`;
        div.style.fontSize = (size * scaleFactor) + "px";

        const letterSpacingPx = (spacing - 1.0) * (size * scaleFactor) * 0.3;
        div.style.letterSpacing = letterSpacingPx + "px";
        div.style.lineHeight = lineSpacingMult;

        return div;
    }

    if (line1 || (!line1 && !line2)) {
        textCtx.appendChild(createLine(line1, size1));
    }

    if (line2) {
        textCtx.appendChild(createLine(line2, size2));
    }
}

// Start building
document.addEventListener("DOMContentLoaded", initForm);
