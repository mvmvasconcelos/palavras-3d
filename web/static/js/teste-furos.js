let scene, camera, renderer, controls;
let currentMesh = null;

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

function clearMesh() {
    if (currentMesh) {
        scene.remove(currentMesh);
        currentMesh.geometry.dispose();
        currentMesh.material.dispose();
        currentMesh = null;
    }
}

function loadSTL(url) {
    const loader = new THREE.STLLoader();
    loader.load(url, function (geometry) {
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(0x1B40D1),
            specular: 0x111111,
            shininess: 200
        });

        currentMesh = new THREE.Mesh(geometry, material);
        // Rotate -90 degrees in X to lay flat, as OpenSCAD Z is up
        currentMesh.rotation.x = -Math.PI / 2;

        scene.add(currentMesh);

        // Center camera and adjust height
        currentMesh.updateMatrixWorld();
        const box = new THREE.Box3().setFromObject(currentMesh);
        const center = box.getCenter(new THREE.Vector3());

        // Push object up so min Y is 0
        currentMesh.position.y -= box.min.y;

        const size = box.getSize(new THREE.Vector3());
        const maxSize = Math.max(size.x, size.y, size.z);
        const distance = maxSize * 2.5;

        camera.position.set(0, distance * 0.8, distance);
        controls.target.set(center.x, center.y, center.z);
        camera.lookAt(center);
        controls.update();
    });
}

// UI Logic
const holesContainer = document.getElementById('holes_container');
const addHoleBtn = document.getElementById('addHoleBtn');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const loading = document.getElementById('loading');

let holeCount = 0;

function addHoleInput(value = 5.0) {
    holeCount++;
    const id = `hole_${holeCount}`;

    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '5px';
    div.style.marginBottom = '5px';
    div.id = `container_${id}`;

    const input = document.createElement('input');
    input.type = 'number';
    input.step = '0.1';
    input.value = value;
    input.id = id;
    input.style.flexGrow = '1';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.className = 'secondary-btn';
    removeBtn.style.width = 'auto';
    removeBtn.style.padding = '0 5px';
    removeBtn.onclick = () => {
        div.remove();
    };

    div.appendChild(input);
    div.appendChild(removeBtn);
    holesContainer.appendChild(div);
}

addHoleBtn.addEventListener('click', () => {
    addHoleInput();
});

// Add default calibration holes
addHoleInput(5.0);
addHoleInput(5.2);
addHoleInput(6.0);
addHoleInput(6.2);
addHoleInput(7.0);
addHoleInput(7.2);

generateBtn.addEventListener('click', () => {
    loading.style.display = 'flex';
    downloadBtn.style.display = 'none';

    // Collect holes
    const holesInputs = holesContainer.querySelectorAll('input');
    const holes = Array.from(holesInputs).map(inp => parseFloat(inp.value));

    const payload = {
        length: parseFloat(document.getElementById('base_length').value),
        width: parseFloat(document.getElementById('base_width').value),
        height: parseFloat(document.getElementById('base_height').value),
        holes: holes
    };

    fetch('/api/generate_test_holes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(data => {
            loading.style.display = 'none';
            if (data.success) {
                clearMesh();
                loadSTL(data.url);

                downloadBtn.href = data.url;
                downloadBtn.style.display = 'block';
            } else {
                alert('Erro ao gerar: ' + data.error);
            }
        })
        .catch(err => {
            loading.style.display = 'none';
            alert('Erro de conexão: ' + err);
        });
});

initViewer();
