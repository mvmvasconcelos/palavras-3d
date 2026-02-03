// Three.js SCENE SETUP
let scene, camera, renderer, controls;
let currentMesh = null;
let meshes = [];

function initViewer() {
    const container = document.getElementById('viewer');

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(-10, -10, -10);
    scene.add(backLight);

    // Camera
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.set(0, 50, 100);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Grid Helper
    // 300mm size, 30 divisions = 10mm per square
    const gridHelper = new THREE.GridHelper(300, 30, 0x888888, 0x333333);
    scene.add(gridHelper);

    // Axes Helper (X=Red, Y=Green, Z=Blue)
    // 50mm length
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);

    // Resize Handler
    window.addEventListener('resize', onWindowResize, false);

    animate();
}

function onWindowResize() {
    const container = document.getElementById('viewer');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function clearMeshes() {
    meshes.forEach(mesh => {
        scene.remove(mesh);
        mesh.geometry.dispose();
        mesh.material.dispose();
    });
    meshes = [];
}

function loadSTL(url, colorHex) {
    const loader = new THREE.STLLoader();

    loader.load(url, function (geometry) {
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(colorHex),
            specular: 0x111111,
            shininess: 200
        });

        const mesh = new THREE.Mesh(geometry, material);

        // We do NOT center each mesh individually anymore, or they will misalign.
        // We rely on OpenSCAD coordinates being correct relative to origin (0,0,0).
        // OR better: Compute bounding box of the FIRST loaded mesh (Base) and adjust camera, 
        // but for now let's just rotate them to stand up.

        mesh.rotation.x = -Math.PI / 2;

        scene.add(mesh);
        meshes.push(mesh);

        updateModelDimensions();
    });
}

function updateModelDimensions() {
    if (meshes.length === 0) return;

    const box = new THREE.Box3();
    meshes.forEach(mesh => {
        // We need to account for the rotation we applied (x = -90deg)
        // ensure world matrix is up to date
        mesh.updateMatrixWorld();
        box.expandByObject(mesh);
    });

    const size = new THREE.Vector3();
    box.getSize(size);

    // After rotation:
    // visual X is Width
    // visual Y is Depth (Height on screen) -> OpenSCAD Y
    // visual Z is Thickness -> OpenSCAD Z

    // We want X and Y from OpenSCAD perspective, which correspond to X and Y in ThreeJS world (because we rotated X by -90, so Z becomes Y-up... wait)
    // Mesh geometry is (x, y, z).
    // Rotation X -90 => (x, z, -y).
    // So World X = Geometry X.
    // World Y = Geometry Z.
    // World Z = -Geometry Y.

    // Actually, bounding box on the rotated object gives World AABB.
    // Width (X) = size.x
    // "Height" (Y onscreen) = size.y (This is OpenSCAD Z / Thickness)
    // "Length" (Z onscreen) = size.z (This is OpenSCAD Y)

    // User wants "Comprimento e Largura". 
    // Usually X is Length (Text width), Y is Height (Text height).
    // Z is Thickness.

    // So dimensions are size.x and size.z (in World coordinates, since we rotated it to stand up).
    // Wait, if we rotated it to stand up, Y is up.
    // OpenSCAD Z (Thickness) -> ThreeJS Y.
    // OpenSCAD Y (Text height) -> ThreeJS Z (Depth).
    // OpenSCAD X (Text width) -> ThreeJS X.

    const width = size.x.toFixed(1);  // Text Length
    const height = size.z.toFixed(1); // Text Height (Y in scad)

    // User likely considers "Comprimento" = left-to-right (X)
    // "Largura" = vertical (Y in scad, Z in viewer)

    const infoDiv = document.getElementById('dimensions-info');
    const dimsVal = document.getElementById('dims-val');

    dimsVal.textContent = `${width}mm x ${height}mm`;
    infoDiv.style.display = 'block';
}

// UI LOGIC
function triggerGeneration() {
    const loading = document.getElementById('loading');
    const downloadBtn = document.getElementById('downloadBtn');
    const dimsInfo = document.getElementById('dimensions-info');

    loading.style.display = 'flex';
    downloadBtn.style.display = 'none';
    dimsInfo.style.display = 'none';

    // Construct font name
    const family = document.getElementById('font_family').value;
    const isBold = document.getElementById('font_bold').checked;
    const isItalic = document.getElementById('font_italic').checked;

    let style = "";
    if (isBold && isItalic) style = ":style=Bold Italic";
    else if (isBold) style = ":style=Bold";
    else if (isItalic) style = ":style=Italic";

    const fontName = family + style;

    const payload = {
        text_line_1: document.getElementById('text_line_1').value,
        text_line_2: document.getElementById('text_line_2').value,
        text_size_1: parseFloat(document.getElementById('text_size_1').value),
        text_size_2: parseFloat(document.getElementById('text_size_2').value),
        font_name: fontName,
        // text_size: parseFloat(document.getElementById('text_size').value), // Removed
        letter_height: parseFloat(document.getElementById('letter_height').value),
        base_height: parseFloat(document.getElementById('base_height').value),
        outline_margin: parseFloat(document.getElementById('outline_margin').value),
        spacing: parseFloat(document.getElementById('spacing').value),
        line_spacing: parseFloat(document.getElementById('line_spacing').value),
        hole_orientation: document.getElementById('hole_orientation').value,
        hole_type: document.getElementById('hole_type').value,
        hole_diameter: parseFloat(document.getElementById('hole_diameter').value),
        base_color: document.getElementById('base_color').value,
        letters_color: document.getElementById('letters_color').value
    };

    fetch('/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error generating model: ' + data.error);
                loading.style.display = 'none';
                return;
            }

            clearMeshes();

            // Load both parts and wait for them
            const p1 = loadSTL(data.base_url, payload.base_color);
            const p2 = loadSTL(data.text_url, payload.letters_color);

            Promise.all([p1, p2]).then(() => {
                alignAllMeshesToOrigin();
                updateModelDimensions();

                loading.style.display = 'none';

                downloadBtn.href = data.full_url;
                downloadBtn.style.display = 'block';

                const downloadZipBtn = document.getElementById('downloadZipBtn');
                if (data.zip_url) {
                    downloadZipBtn.href = data.zip_url;
                    downloadZipBtn.style.display = 'block';
                } else {
                    downloadZipBtn.style.display = 'none';
                }

                // Show help text
                const helpText = document.getElementById('download-help');
                if (helpText) helpText.style.display = 'block';
            });
        })
        .catch(err => {
            console.error('Network error: ' + err);
            loading.style.display = 'none';
        });
}

function loadSTL(url, colorHex) {
    return new Promise((resolve, reject) => {
        const loader = new THREE.STLLoader();
        loader.load(url, function (geometry) {
            const material = new THREE.MeshPhongMaterial({
                color: new THREE.Color(colorHex),
                specular: 0x111111,
                shininess: 200
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.rotation.x = -Math.PI / 2; // Lay flat on bed

            scene.add(mesh);
            meshes.push(mesh);
            resolve(mesh);
        }, undefined, function (error) {
            reject(error);
        });
    });
}

function alignAllMeshesToOrigin() {
    if (meshes.length === 0) return;

    // 1. Calculate combined bounding box of all meshes in World Space
    const combinedBox = new THREE.Box3();
    meshes.forEach(mesh => {
        mesh.updateMatrixWorld();
        combinedBox.expandByObject(mesh);
    });

    // 2. Calculate offsets to bring min X and min Z (depth) to 0
    // Y is up in ThreeJS. We want it sitting on the grid (min Y = 0).
    const minX = combinedBox.min.x;
    const minY = combinedBox.min.y; // Height from floor
    const minZ = combinedBox.min.z; // Depth

    // 3. Apply offset to all meshes
    meshes.forEach(mesh => {
        mesh.position.x -= minX;
        mesh.position.y -= minY;
        mesh.position.z -= minZ;

        // Also move Z slightly to center it? 
        // User asked for "0,0 going to right". 
        // Usually implies X=0 is left edge. 
        // Z=0 is usually back or front edge. Let's make it minZ=0 so it sits in the positive quadrant.
    });

    fitCameraToObject();
}

function fitCameraToObject() {
    if (meshes.length === 0) return;

    const box = new THREE.Box3();
    meshes.forEach(mesh => {
        mesh.updateMatrixWorld();
        box.expandByObject(mesh);
    });

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxSize = Math.max(size.x, size.y, size.z);

    // Draw Ruler
    // Place it "behind" the object (minZ - 10mm)
    // And start at minX
    drawRuler(0, size.x, box.min.z - 15);

    if (maxSize === 0) {
        console.warn("Model size is 0, skipping camera fit");
        return;
    }

    const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * camera.fov / 360));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);

    const direction = controls.target.clone().sub(camera.position).normalize().multiplyScalar(distance);

    controls.maxDistance = distance * 10;
    controls.target.copy(center);

    // Position camera to look at the object nicely from an angle
    camera.near = distance / 100;
    camera.far = distance * 100;
    camera.updateProjectionMatrix();

    camera.position.set(center.x, center.y + distance * 0.5, center.z + distance);
    camera.lookAt(center);

    controls.update();
}


// Ruler Logic
let currentRuler = null;

function createTextSprite(message) {
    const canvas = document.createElement('canvas');
    const size = 128;
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');

    // Transparent background
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.clearRect(0, 0, size, size);

    // Text
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff"; // White text
    ctx.font = "bold 40px Arial"; // Smaller font
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black'; // Keep outline for contrast
    ctx.strokeText(message, size / 2, size / 2);
    ctx.fillText(message, size / 2, size / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, depthTest: false });
    const sprite = new THREE.Sprite(material);

    // Scale: 10mm x 10mm (Smaller visual footprint)
    sprite.scale.set(10, 10, 1);
    sprite.center.set(0.5, 0.5);
    return sprite;
}

function drawRuler(startX, width, zPos) {
    if (currentRuler) {
        scene.remove(currentRuler);
        currentRuler = null;
    }

    const group = new THREE.Group();

    // Ruler Line (White)
    // Round up width to nearest 10
    const rulerLen = Math.ceil(width / 10) * 10;

    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(startX, 0, zPos),
        new THREE.Vector3(startX + rulerLen, 0, zPos)
    ]);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geometry, material);
    group.add(line);

    // Ticks and Numbers
    for (let i = 0; i <= rulerLen; i += 10) {
        const x = startX + i;

        // Tick mark
        const tickHeight = (i % 50 === 0) ? 5 : 2.5; // Long tick every 50mm
        const tickGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x, 0, zPos),
            new THREE.Vector3(x, 0, zPos - tickHeight) // Draw tick "backwards" or "up" on grid? let's draw flat on Z
            // Actually user wants it "above". If we draw flat on XZ plane:
            // Let's stick tick pointing "back" (negative Z)
        ]);
        const tickLine = new THREE.Line(tickGeo, material);
        group.add(tickLine);

        // Number
        if (i > 0 && i % 10 === 0) {
            const sprite = createTextSprite(i + "mm");

            // Position sprite:
            // X = tick position
            // Y = 0.5 (slightly above ground)
            // Z = zPos - tickHeight - 5 (further "back" / "above" the tick tip)

            // Use a larger offset for Z to make it clear
            sprite.position.set(x, 0.5, zPos - tickHeight - 5);
            group.add(sprite);
        }
    }

    scene.add(group);
    currentRuler = group;
}

function update2DPreview() {
    const textCtx = document.getElementById('preview-text');
    const line1 = document.getElementById('text_line_1').value || "";
    const line2 = document.getElementById('text_line_2').value || "";

    const size1 = parseFloat(document.getElementById('text_size_1').value) || 12;
    const size2 = parseFloat(document.getElementById('text_size_2').value) || 12;

    const family = document.getElementById('font_family').value;
    const isBold = document.getElementById('font_bold').checked;
    const isItalic = document.getElementById('font_italic').checked;

    const baseColor = document.getElementById('base_color').value;
    const textColor = document.getElementById('letters_color').value;
    const outlineMargin = parseFloat(document.getElementById('outline_margin').value);
    const spacing = parseFloat(document.getElementById('spacing').value); // Letter spacing

    // Line spacing input is a multiplier (e.g. 1.0, 1.2). 
    // In CSS line-height can be unitless acting as multiplier.
    const lineSpacingMult = parseFloat(document.getElementById('line_spacing').value);

    // Update display for range inputs
    document.getElementById('spacing-val').textContent = document.getElementById('spacing').value;
    document.getElementById('line_spacing-val').textContent = document.getElementById('line_spacing').value;

    // Clear current content
    textCtx.innerHTML = '';

    // We need a container that allows line stacking. 
    // Flex column is good.
    textCtx.style.display = 'flex';
    textCtx.style.flexDirection = 'column';
    textCtx.style.alignItems = 'center';
    textCtx.style.justifyContent = 'center';

    // Base visual scale factor to make it look decent on screen (12mm -> ~40px ?)
    const scaleFactor = 4.0;

    // Helper to create line element
    function createLine(text, size) {
        const div = document.createElement('div');
        div.textContent = text || '\u00A0'; // Non-breaking space if empty to hold height

        // Font Styles
        // Font Styles
        const fontSelect = document.getElementById('font_family');
        let selectedFontFamily = `"${family}", "Comic Neue", cursive`; // Fallback

        if (fontSelect.selectedOptions.length > 0) {
            const styleFont = fontSelect.selectedOptions[0].style.fontFamily;
            if (styleFont) selectedFontFamily = styleFont;
        }

        div.style.fontFamily = selectedFontFamily;
        div.style.fontWeight = isBold ? 'bold' : 'normal';
        div.style.fontStyle = isItalic ? 'italic' : 'normal';
        div.style.whiteSpace = "pre"; // Preserve multiple spaces

        // Colors
        div.style.color = textColor;
        div.style.webkitTextStroke = `${outlineMargin * 1.5}px ${baseColor}`; // Visual approx

        // Size
        div.style.fontSize = (size * scaleFactor) + "px";

        // Letter Spacing
        // approximate: (spacing - 1.0) * fontSize * factor
        const letterSpacingPx = (spacing - 1.0) * (size * scaleFactor) * 0.3;
        div.style.letterSpacing = letterSpacingPx + "px";

        // Line Height / Spacing
        // If we use block elements, margin-bottom or line-height works.
        // line-height: 1.0 is tight.
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

// Add listeners to new inputs
document.getElementById('text_line_1').addEventListener('input', update2DPreview);
document.getElementById('text_line_2').addEventListener('input', update2DPreview);
document.getElementById('text_size_1').addEventListener('input', update2DPreview); // Just triggers update
document.getElementById('text_size_2').addEventListener('input', update2DPreview);

document.getElementById('font_family').addEventListener('change', update2DPreview);
document.getElementById('font_bold').addEventListener('change', update2DPreview);
document.getElementById('font_italic').addEventListener('change', update2DPreview);
document.getElementById('base_color').addEventListener('input', update2DPreview);
document.getElementById('letters_color').addEventListener('input', update2DPreview);
document.getElementById('outline_margin').addEventListener('input', update2DPreview);
document.getElementById('spacing').addEventListener('input', update2DPreview);
document.getElementById('line_spacing').addEventListener('input', update2DPreview);

// Initial call
update2DPreview();

// Attach listener for 2D preview (Instant)
const allInputs = document.querySelectorAll('input, select');
allInputs.forEach(input => {
    input.addEventListener('input', update2DPreview);
    input.addEventListener('change', update2DPreview);
});

// Trigger initial 2D preview
update2DPreview();

// Restore the Generate Button Listener!
document.getElementById('generateBtn').addEventListener('click', () => {
    triggerGeneration();
});

// Initialize 3D Viewer on load
// Initialize 3D Viewer on load
initViewer();

// ------------------------------------------------------------------
// AUTO-SAVE FUNCTIONALITY (LocalStorage)
// ------------------------------------------------------------------

function saveState() {
    const state = {};
    const allowList = [
        'text_line_1', 'text_line_2',
        'text_size_1', 'text_size_2',
        'font_family', 'font_bold', 'font_italic',
        'base_height', 'letter_height',
        'spacing', 'line_spacing', 'outline_margin',
        'hole_orientation', 'hole_type', 'hole_diameter',
        'base_color', 'letters_color'
    ];

    allowList.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.type === 'checkbox') {
                state[id] = el.checked;
            } else {
                state[id] = el.value;
            }
        }
    });

    localStorage.setItem('palavras3d_state', JSON.stringify(state));
    // Optional: console.log('State saved');
}

function restoreState() {
    const saved = localStorage.getItem('palavras3d_state');
    if (!saved) return;

    try {
        const state = JSON.parse(saved);
        Object.keys(state).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (el.type === 'checkbox') {
                    el.checked = state[id];
                } else {
                    el.value = state[id];
                }
            }
        });
        console.log("Settings restored from Auto-Save.");

        // Trigger updates after restore
        update2DPreview();
    } catch (e) {
        console.error("Error restoring state:", e);
    }
}

// Hook into existing inputs for saving
allInputs.forEach(input => {
    input.addEventListener('input', saveState);
    input.addEventListener('change', saveState);
});

// Restore on load
// restoreState(); // Moved to inside loadFonts().then()

// ------------------------------------------------------------------
// FONT MANAGEMENT
// ------------------------------------------------------------------

const fontSelect = document.getElementById('font_family');
const uploadBtn = document.getElementById('btn_upload_font');
const fileInput = document.getElementById('font_file_input');

// Default fonts (Google Fonts loaded in index.html)
const defaultFonts = [
    { name: "Comic Neue", family: "'Comic Neue', cursive" },
    { name: "Fredoka One", family: "'Fredoka One', cursive" },
    { name: "Chewy", family: "'Chewy', cursive" },
    { name: "Bangers", family: "'Bangers', cursive" },
    { name: "Lobster", family: "'Lobster', cursive" },
    { name: "Patrick Hand", family: "'Patrick Hand', cursive" },
    { name: "Righteous", family: "'Righteous', cursive" },
    { name: "Russo One", family: "'Russo One', sans-serif" },
    { name: "Arial", family: "Arial, sans-serif" },
    { name: "Verdana", family: "Verdana, sans-serif" },
    { name: "Times New Roman", family: "'Times New Roman', serif" },
    { name: "Courier New", family: "'Courier New', monospace" }
];

async function loadFonts() {
    // 1. Fetch custom fonts from server
    let customFonts = [];
    try {
        const res = await fetch('/api/fonts');
        if (res.ok) customFonts = await res.json();
    } catch (e) {
        console.error("Failed to load fonts", e);
    }

    // 2. Clear select
    fontSelect.innerHTML = '';

    // 3. Helper to create option
    const addOption = (label, value, fontFamily, isCustom = false, filename = null) => {
        const opt = document.createElement('option');
        opt.textContent = label;
        opt.value = value;
        opt.style.fontFamily = fontFamily;
        if (isCustom) {
            opt.dataset.custom = "true";
            opt.dataset.filename = filename;
            opt.textContent = `📂 ${label}`;
        }
        fontSelect.appendChild(opt);
    };

    // 4. Add Default Fonts
    defaultFonts.forEach(f => addOption(f.name, f.name, f.family));

    // 5. Add Custom Fonts & Inject CSS
    // We create a <style> block for custom fonts
    let styleBlock = document.getElementById('custom-fonts-css');
    if (!styleBlock) {
        styleBlock = document.createElement('style');
        styleBlock.id = 'custom-fonts-css';
        document.head.appendChild(styleBlock);
    }

    let cssRules = "";
    customFonts.forEach(f => {
        // Create unique font-family name for CSS to avoid conflicts
        const cssFontFamily = `CustomFont_${f.filename.replace(/\W/g, '')}`;

        cssRules += `
            @font-face {
                font-family: '${cssFontFamily}';
                src: url('${f.url}') format('truetype');
            }
        `;

        addOption(f.name, f.name, `'${cssFontFamily}', sans-serif`, true, f.filename);
    });
    styleBlock.textContent = cssRules;
}

// Upload Logic
if (uploadBtn) {
    uploadBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', async () => {
        if (fileInput.files.length === 0) return;

        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('font_file', file);

        const oldText = uploadBtn.textContent;
        uploadBtn.textContent = "⏳";

        try {
            const res = await fetch('/api/upload-font', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                await loadFonts();
                // Auto-select the new font logic...
                // Find and select
                for (let i = 0; i < fontSelect.options.length; i++) {
                    if (fontSelect.options[i].dataset.filename === data.filename) {
                        fontSelect.selectedIndex = i;
                        break;
                    }
                }
                update2DPreview();
            } else {
                alert("Erro ao subir fonte: " + data.error);
            }
        } catch (e) {
            alert("Erro no upload: " + e);
        } finally {
            uploadBtn.textContent = oldText;
            fileInput.value = "";
        }
    });
}

// Initial Load
loadFonts().then(() => {
    restoreState();
});


