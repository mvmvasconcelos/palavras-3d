import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';

let scene, camera, renderer, currentMesh;

export function initViewer(container) {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9);

    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    camera.position.set(60, -90, 107);
    camera.up.set(0, 0, 1); // Z-up for CAD

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(40, 0, 0); // Focus on the center of the text area

    // Lights
    const ambi = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambi);
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(50, -100, 100);
    scene.add(dir);

    // Grid Helper (10mm subdivisions)
    const grid = new THREE.GridHelper(300, 30, 0x94a3b8, 0xcbd5e1);
    grid.rotateX(Math.PI / 2);
    scene.add(grid);

    // Axes Helper
    const axes = new THREE.AxesHelper(30);
    scene.add(axes);

    // Visual Ruler Labels
    addRulerLabels(scene);

    // Loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

function addRulerLabels(scene) {
    const interval = 10;
    const count = 10; // Up to 100mm

    for (let i = 1; i <= count; i++) {
        const val = i * interval;
        const sprite = createTextSprite(val + "mm");
        sprite.position.set(val, -5, 0.2); // Along X-axis
        scene.add(sprite);
    }
}

function createTextSprite(text) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 128;

    ctx.fillStyle = '#475569';
    ctx.font = 'Bold 48px Inter, Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(12, 6, 1);
    return sprite;
}

export function updateMesh(meshData, textColor = 0x2563eb, baseColor = 0xffffff) {
    if (currentMesh) {
        scene.remove(currentMesh);
        // Traverse to dispose all geometries and materials in the group
        currentMesh.traverse(child => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
        });
    }

    currentMesh = new THREE.Group();

    const createMesh = (manifoldMesh, color) => {
        if (!manifoldMesh || manifoldMesh.triVerts.length === 0) return null;
        const geometry = new THREE.BufferGeometry();
        const numProp = manifoldMesh.numProp || 3;

        if (numProp > 3) {
            const posData = new Float32Array(manifoldMesh.numVert * 3);
            for (let i = 0; i < manifoldMesh.numVert; i++) {
                posData[i * 3 + 0] = manifoldMesh.vertProperties[i * numProp + 0];
                posData[i * 3 + 1] = manifoldMesh.vertProperties[i * numProp + 1];
                posData[i * 3 + 2] = manifoldMesh.vertProperties[i * numProp + 2];
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(posData, 3));
        } else {
            geometry.setAttribute('position', new THREE.BufferAttribute(manifoldMesh.vertProperties, 3));
        }

        geometry.setIndex(new THREE.BufferAttribute(manifoldMesh.triVerts, 1));
        geometry.computeVertexNormals();

        const material = new THREE.MeshPhongMaterial({
            color: color,
            specular: 0x111111,
            shininess: 40,
            side: THREE.DoubleSide
        });

        return new THREE.Mesh(geometry, material);
    };

    // Handle single mesh or object with textMesh/baseMesh
    if (meshData.textMesh) {
        const textObj = createMesh(meshData.textMesh, textColor);
        if (textObj) currentMesh.add(textObj);
    }

    if (meshData.baseMesh) {
        const baseObj = createMesh(meshData.baseMesh, baseColor);
        if (baseObj) currentMesh.add(baseObj);
    }

    // Fallback for direct mesh result (backward compatibility)
    if (!meshData.textMesh && meshData.triVerts) {
        const obj = createMesh(meshData, textColor);
        if (obj) currentMesh.add(obj);
    }

    scene.add(currentMesh);
}

export function downloadSTL(filename) {
    if (!currentMesh) return;
    const exporter = new STLExporter();
    const result = exporter.parse(currentMesh, { binary: true });
    const blob = new Blob([result], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename + '.stl';
    link.click();
}
