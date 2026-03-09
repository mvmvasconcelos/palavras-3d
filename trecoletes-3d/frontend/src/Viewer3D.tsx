import React, { useState } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

// ------------------------------------------------------------------
// Camera HUD
// ------------------------------------------------------------------
interface CameraInfo {
    px: number; py: number; pz: number;
    tx: number; ty: number; tz: number;
    fov: number;
}

function CameraTracker({ onUpdate }: { onUpdate: (info: CameraInfo) => void }) {
    const { camera } = useThree();
    useFrame(() => {
        const pos = camera.position;
        const target = (camera as any).__orbitTarget as THREE.Vector3 | undefined;
        onUpdate({
            px: pos.x, py: pos.y, pz: pos.z,
            tx: target?.x ?? 0, ty: target?.y ?? 0, tz: target?.z ?? 0,
            fov: (camera as THREE.PerspectiveCamera).fov ?? 0,
        });
    });
    return null;
}

function ControlsWithTarget() {
    return (
        <OrbitControls
            makeDefault
            target={[0, 0, 0]}
            onChange={(e) => {
                if (e?.target?.object) {
                    (e.target.object as any).__orbitTarget = e.target.target.clone();
                }
            }}
        />
    );
}

// ------------------------------------------------------------------
// STL meshes
// ------------------------------------------------------------------
function StlMesh({ url, color }: { url: string; color: string }) {
    const geom = useLoader(STLLoader, url);
    return (
        <mesh geometry={geom} castShadow receiveShadow>
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </mesh>
    );
}

function PlaceholderModel() {
    return (
        <mesh castShadow receiveShadow>
            <boxGeometry args={[40, 40, 10]} />
            <meshStandardMaterial color="#404040" metalness={0.2} roughness={0.3} />
        </mesh>
    );
}

// ------------------------------------------------------------------
// Props & Main Viewer
// ------------------------------------------------------------------
export interface Viewer3DProps {
    carimbBaseUrl: string | null;
    carimbArteUrl: string | null;
    cortadorUrl: string | null;
    isGenerating: boolean;
    artColor: string;
    modelColor: string;
}

export default function Viewer3D({ carimbBaseUrl, carimbArteUrl, cortadorUrl, isGenerating, artColor, modelColor }: Viewer3DProps) {
    const [camInfo, setCamInfo] = useState<CameraInfo | null>(null);
    const fmt = (n: number) => n.toFixed(1);
    const hasModel = carimbBaseUrl || carimbArteUrl || cortadorUrl;

    return (
        <div className="w-full h-full relative bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">

            {isGenerating && (
                <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                    <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
                    <h3 className="text-xl font-semibold text-emerald-400">Processando OpenSCAD...</h3>
                    <p className="text-neutral-400 text-sm mt-2">Isso pode levar alguns segundos dependendo da complexidade.</p>
                </div>
            )}

            <Canvas shadows camera={{ position: [0, -180, 80], fov: 45 }}>
                <color attach="background" args={['#262626']} />
                <ambientLight intensity={0.5} />
                <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#404040" />
                <directionalLight position={[50, 50, 100]} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} />

                <React.Suspense fallback={null}>
                    {hasModel ? (
                        <>
                            {carimbBaseUrl && <StlMesh url={carimbBaseUrl} color={modelColor} />}
                            {carimbArteUrl && <StlMesh url={carimbArteUrl} color={artColor} />}
                            {cortadorUrl && <StlMesh url={cortadorUrl} color={modelColor} />}
                        </>
                    ) : (
                        <PlaceholderModel />
                    )}
                </React.Suspense>

                <ControlsWithTarget />
                <CameraTracker onUpdate={setCamInfo} />
                <axesHelper args={[50]} />
            </Canvas>

            {camInfo && (
                <div className="absolute bottom-3 right-3 z-20 font-mono text-xs bg-black/70 text-emerald-400 rounded-lg px-3 py-2 space-y-0.5 border border-emerald-900/50 backdrop-blur-sm select-all">
                    <div className="text-neutral-500 text-[10px] uppercase tracking-widest mb-1">Câmera (debug)</div>
                    <div>pos  <span className="text-white">[{fmt(camInfo.px)}, {fmt(camInfo.py)}, {fmt(camInfo.pz)}]</span></div>
                    <div>alvo <span className="text-white">[{fmt(camInfo.tx)}, {fmt(camInfo.ty)}, {fmt(camInfo.tz)}]</span></div>
                    <div>fov  <span className="text-white">{fmt(camInfo.fov)}°</span></div>
                </div>
            )}
        </div>
    );
}
