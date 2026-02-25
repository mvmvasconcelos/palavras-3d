// viewer.js - Three.js logic for rendering STLs and Exporting

let scene, camera, renderer, controls;
let meshes = [];

// Three.js Core
function initViewer() {
    const container = document.getElementById('viewer');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(-10, -10, -10);
    scene.add(backLight);

    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.set(0, 50, 100);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const gridHelper = new THREE.GridHelper(300, 30, 0x888888, 0x333333);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);

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

// ----------------------------------------------------
// GENERATION & RULER
// ----------------------------------------------------
function triggerGeneration() {
    const data = window.getFormData(); // Passed blindly
    const modelId = window.CURRENT_MODEL_ID;

    const loading = document.getElementById('loading');
    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.getElementById('loading-text');
    const downloadBtn = document.getElementById('downloadBtn');
    const dimsInfo = document.getElementById('dimensions-info');

    loading.style.display = 'flex';
    downloadBtn.style.display = 'none';
    dimsInfo.style.display = 'none';

    // Start Fake Progress Bar
    progressBar.style.width = '0%';
    let progressValue = 0;

    // Simulates an async generation task, gradually filling up to 90%.
    const progressInterval = setInterval(() => {
        if (progressValue < 90) {
            // Slower progress as it gets higher
            let increment = Math.random() * (90 - progressValue) * 0.1 + 1;
            progressValue += increment;
            progressBar.style.width = `${progressValue}%`;

            if (progressValue < 30) loadingText.textContent = "Preparando modelo base...";
            else if (progressValue < 60) loadingText.textContent = "Extrusando fontes e malhas...";
            else loadingText.textContent = "Fatiando modelo final (OpenSCAD)...";
        }
    }, 400);

    fetch(`/api/models/${modelId}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                clearInterval(progressInterval);
                console.error('Error generating model: ' + response.error);
                loading.style.display = 'none';
                alert("Erro na geração: " + response.error);
                return;
            }

            // Task complete
            clearInterval(progressInterval);
            progressBar.style.width = '100%';
            loadingText.textContent = "Concluído! Renderizando 3D...";

            clearMeshes();

            let promises = [];
            // Legacy multi-part loading or general model rendering
            if (response.base_url && response.text_url) {
                promises.push(loadSTL(response.base_url, data.base_color || '#1B40D1'));
                promises.push(loadSTL(response.text_url, data.letters_color || '#FFFFFF'));
            } else if (response.full_url) {
                promises.push(loadSTL(response.full_url, data.base_color || '#1B40D1'));
            }

            Promise.all(promises).then(() => {
                alignAllMeshesToOrigin();
                updateModelDimensions();

                setTimeout(() => {
                    loading.style.display = 'none';
                }, 400); // Tiny delay to let user see 100%

                if (response.full_url) {
                    downloadBtn.href = response.full_url;
                    downloadBtn.style.display = 'block';
                }

                const downloadZipBtn = document.getElementById('downloadZipBtn');
                const download3mfBtn = document.getElementById('download3mfBtn');

                if (response.zip_url) {
                    downloadZipBtn.href = response.zip_url;
                    downloadZipBtn.style.display = 'block';
                    if (download3mfBtn) download3mfBtn.style.display = 'block';
                } else {
                    downloadZipBtn.style.display = 'none';
                    if (download3mfBtn) download3mfBtn.style.display = 'none';
                }
            });
        })
        .catch(err => {
            clearInterval(progressInterval);
            console.error('Network error: ' + err);
            loading.style.display = 'none';
            alert('Falha na conexão.');
        });
}

function alignAllMeshesToOrigin() {
    // Original system did not force artificial alignments,
    // relying on OpenSCAD mathematically precise local coordinates.
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

    // Ruler drawing offset matches bounding box left edge
    drawRuler(box.min.x, size.x, box.min.z - 15);

    if (maxSize === 0) return;

    const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * camera.fov / 360));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);

    controls.maxDistance = distance * 10;
    controls.target.copy(center);

    camera.near = distance / 100;
    camera.far = distance * 100;
    camera.updateProjectionMatrix();

    // Original camera positioning from main.js
    // Changed for a more top-down, slightly angled view
    camera.position.set(center.x, center.y + distance * 0.9, center.z + distance * 0.45);
    camera.lookAt(center);
    controls.update();
}

function updateModelDimensions() {
    if (meshes.length === 0) return;

    const box = new THREE.Box3();
    meshes.forEach(mesh => {
        mesh.updateMatrixWorld();
        box.expandByObject(mesh);
    });
    const size = new THREE.Vector3();
    box.getSize(size);

    const width = size.x.toFixed(1);
    const height = size.z.toFixed(1);

    const infoDiv = document.getElementById('dimensions-info');
    const dimsVal = document.getElementById('dims-val');

    dimsVal.textContent = `${width}mm x ${height}mm`;
    infoDiv.style.display = 'block';
}

let currentRuler = null;

function createTextSprite(message) {
    const canvas = document.createElement('canvas');
    const size = 128;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.clearRect(0, 0, size, size);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 40px Arial";
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.strokeText(message, size / 2, size / 2);
    ctx.fillText(message, size / 2, size / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, depthTest: false });
    const sprite = new THREE.Sprite(material);

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
    const rulerLen = Math.ceil(width / 10) * 10;
    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(startX, 0, zPos),
        new THREE.Vector3(startX + rulerLen, 0, zPos)
    ]);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geometry, material);
    group.add(line);

    for (let i = 0; i <= rulerLen; i += 10) {
        const x = startX + i;
        const tickHeight = (i % 50 === 0) ? 5 : 2.5;
        const tickGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x, 0, zPos),
            new THREE.Vector3(x, 0, zPos - tickHeight)
        ]);
        const tickLine = new THREE.Line(tickGeo, material);
        group.add(tickLine);

        if (i > 0 && i % 10 === 0) {
            const sprite = createTextSprite(i + "mm");
            sprite.position.set(x, 0.5, zPos - tickHeight - 5);
            group.add(sprite);
        }
    }
    scene.add(group);
    currentRuler = group;
}

// ----------------------------------------------------
// EXPORT 3MF
// ----------------------------------------------------
function export3MF() {
    if (meshes.length === 0) return;
    try {
        const exporter = new THREE['3MFExporter']();

        const group = new THREE.Group();
        meshes.forEach(mesh => {
            const clone = mesh.clone();
            clone.material = mesh.material.clone();
            clone.name = (group.children.length === 0) ? "Base" : "Part_" + group.children.length;
            group.add(clone);
        });

        scene.add(group);
        const arrayBuffer = exporter.parse(group);
        scene.remove(group);

        const blob = new Blob([arrayBuffer], { type: 'application/vnd.ms-pki.securable-3mf' });
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = URL.createObjectURL(blob);
        link.download = `${window.CURRENT_MODEL_ID}-multicolor.3mf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (err) {
        console.error("Erro exportando 3MF:", err);
        alert("Erro ao exportar 3MF: " + err);
    }
}

// Global hooks
document.addEventListener("DOMContentLoaded", () => {
    initViewer();
    const btnGen = document.getElementById('generateBtn');
    if (btnGen) btnGen.addEventListener('click', triggerGeneration);

    const btn3mf = document.getElementById('download3mfBtn');
    if (btn3mf) btn3mf.addEventListener('click', export3MF);
});
