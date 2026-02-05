import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';

let scene, camera, renderer, currentMesh;

export function initViewer(container) {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe5e7eb);

    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    camera.position.set(0, -100, 100);
    camera.up.set(0, 0, 1); // Z-up for CAD

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lights
    const ambi = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambi);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(50, -50, 100);
    scene.add(dir);

    // Helpers
    scene.add(new THREE.GridHelper(200, 20).rotateX(Math.PI / 2));
    scene.add(new THREE.AxesHelper(20));

    // Debug Cube (to verify viewer works)
    const debugBox = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    debugBox.position.z = 1; // Sit on grid
    scene.add(debugBox);

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

export function updateMesh(manifoldMesh) {
    console.log("Updating Mesh:", manifoldMesh);

    if (currentMesh) {
        scene.remove(currentMesh);
        currentMesh.geometry.dispose();
    }

    if (!manifoldMesh || manifoldMesh.triVerts.length === 0) {
        console.warn("Received empty mesh from Manifold.");
        return;
    }

    // Convert Manifold Mesh to Three.js BufferGeometry
    const geometry = new THREE.BufferGeometry();

    // Handle potential extra properties in vertProperties (stride)
    const numProp = manifoldMesh.numProp || 3;
    if (numProp > 3) {
        // Extract only x, y, z if there are extra properties
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
        color: 0x2563eb,
        specular: 0x111111,
        shininess: 30,
        flatShading: false,
        side: THREE.DoubleSide // Ensure visibility from both sides
    });

    currentMesh = new THREE.Mesh(geometry, material);
    scene.add(currentMesh);

    console.log(`Mesh added to scene: ${manifoldMesh.numVert} vertices, ${manifoldMesh.triVerts.length / 3} triangles.`);
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
