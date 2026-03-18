import React, { useState, useRef } from 'react';
import Viewer3D from './Viewer3D';
import { Upload, Sliders, Scissors, Home, ChevronRight, ChevronDown, Type } from 'lucide-react';
import { processSvgFile } from './svgProcessor';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

async function downloadBlob(url: string, filename: string) {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(blobUrl);
}

function SvgPreviewModal({
    isOpen,
    onClose,
    onConfirm,
    onLoadAnother,
    svgText,
    initialThickness
}: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (processed: any, thickness: number) => void;
    onLoadAnother: () => void;
    svgText: string | null;
    initialThickness: number;
}) {
    const [thickness, setThickness] = useState(initialThickness);
    const [preview, setPreview] = useState<any>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [preserveFill, setPreserveFill] = useState(true);

    React.useEffect(() => {
        if (!isOpen || !svgText) return;
        let isActive = true;
        const process = async () => {
            setIsProcessing(true);
            try {
                const res = await processSvgFile(svgText, thickness, 3.0, preserveFill);
                if (isActive) setPreview(res);
            } catch (err) {
                console.error(err);
            } finally {
                if (isActive) setIsProcessing(false);
            }
        };
        const timeoutId = setTimeout(process, 100);
        return () => { isActive = false; clearTimeout(timeoutId); };
    }, [svgText, thickness, isOpen, preserveFill]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl w-full max-w-4xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center p-4 border-b border-neutral-800 bg-neutral-950">
                    <h2 className="text-lg font-bold text-neutral-200 tracking-wider">PRÉ-VISUALIZAÇÃO SVG</h2>
                    <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="p-6 space-y-4 flex-1 overflow-y-auto">
                    <div className="flex items-center gap-6 flex-wrap">
                        <div className="flex-1 space-y-2 min-w-48">
                            <label className="flex justify-between text-sm font-medium text-neutral-400">
                                <span>Engrossar Linhas: <span className="text-emerald-400">{thickness.toFixed(1)}px</span></span>
                            </label>
                            <input type="range" min="0" max="5" step="0.1" value={thickness} onChange={e => setThickness(parseFloat(e.target.value))} className="w-full accent-emerald-500" />
                        </div>
                        <button
                            onClick={() => setPreserveFill(p => !p)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${preserveFill
                                ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-900/40'
                                : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:border-neutral-500'
                                }`}
                        >
                            <span className={`w-3 h-3 rounded-full border-2 transition-colors ${preserveFill ? 'bg-white border-white' : 'border-neutral-500'}`} />
                            Manter Preenchimento
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h3 className="text-center text-sm font-semibold text-neutral-400">SVG Original</h3>
                            <div className="rounded-lg p-2 h-56 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f0ebe3' }}>
                                {preview ? <div dangerouslySetInnerHTML={{ __html: preview.originalSvg }} className="w-full h-full [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:object-contain" /> : <span className="text-neutral-600 animate-pulse">Processando...</span>}
                            </div>
                        </div>
                        <div className="space-y-3 relative">
                            <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 z-10 border border-neutral-700">
                                →
                            </div>
                            <h3 className="text-center text-sm font-semibold text-neutral-400">SVG Engrossado</h3>
                            <div className="rounded-lg p-2 h-56 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f0ebe3' }}>
                                {preview ? <div dangerouslySetInnerHTML={{ __html: preview.thickenedSvg }} className="w-full h-full [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:object-contain" /> : <span className="text-neutral-600 animate-pulse">Processando...</span>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex justify-between items-center gap-3">
                    <button
                        onClick={onLoadAnother}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition-colors border border-neutral-700"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                        Carregar outro arquivo
                    </button>
                    <div className="flex gap-3">
                        <button onClick={onClose} className="px-5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-medium transition-colors">
                            Cancelar
                        </button>
                        <button
                            onClick={() => onConfirm(preview, thickness)}
                            disabled={isProcessing || !preview}
                            className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-900/50 transition-colors disabled:opacity-50"
                        >
                            Confirmar e Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Generator() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [carimbBaseUrl, setCarimbBaseUrl] = useState<string | null>(null);
    const [carimbArteUrl, setCarimbArteUrl] = useState<string | null>(null);
    const [cortadorUrl, setCortadorUrl] = useState<string | null>(null);
    const [tmfUrl, setTmfUrl] = useState<string | null>(null);

    // Viewer colors
    const [artColor, setArtColor] = useState('#f5f0e8');    // raised art (bone white)
    const [modelColor, setModelColor] = useState('#34d399'); // base + cutter (emerald)

    const [svgFile, setSvgFile] = useState<File | null>(null);
    const [svgText, setSvgText] = useState<string | null>(null);

    // -- ESTADO DINÂMICO (Server-Driven UI) --
    const [modelConfig, setModelConfig] = useState<any>(null);
    const [dynamicParams, setDynamicParams] = useState<Record<string, any>>({});

    // Busca a configuração do modelo ao carregar
    React.useEffect(() => {
        let isMounted = true;
        const fetchConfig = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/models/cortador_cookie/config');
                if (isMounted && res.data && res.data.parameters) {
                    setModelConfig(res.data);
                    const initialParams: Record<string, any> = {};
                    res.data.parameters.forEach((param: any) => {
                        initialParams[param.id] = param.default;
                    });
                    setDynamicParams(initialParams);
                }
            } catch (err) {
                console.error("Erro ao carregar configuração do modelo:", err);
            }
        };
        fetchConfig();
        return () => { isMounted = false; };
    }, []);

    // Helper para atualizar parâmetros dinâmicos
    const handleDynamicParamChange = (id: string, value: any) => {
        setDynamicParams(prev => ({ ...prev, [id]: value }));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Controle de tamanho da arte
    const [artHeight, setArtHeight] = useState(70);
    const [artWidth, setArtWidth] = useState(70);
    const [lockAspectRatio, setLockAspectRatio] = useState(true);
    const [svgAspectRatio, setSvgAspectRatio] = useState(1.0); // width / height

    // Formatos e variáveis calculadas
    type CutterShape = 'silhouette' | 'square' | 'circle' | 'rectangle' | 'hexagon';
    const [cutterShape, setCutterShape] = useState<CutterShape>('silhouette');
    const [cutterW, setCutterW] = useState(78);
    const [cutterH, setCutterH] = useState(78);

    // Pega a margem da silhueta do estado dinâmico (usa 4.0 como fallback se não carregou)
    const currentSilhouetteExp = dynamicParams['silhouette_exp'] ?? 4.0;

    const minCutterW = artWidth + currentSilhouetteExp * 2;
    const minCutterH = artHeight + currentSilhouetteExp * 2;

    const artDiag = Math.sqrt(artWidth * artWidth + artHeight * artHeight);
    const autoSquareSize = Math.max(artWidth, artHeight) + currentSilhouetteExp * 2;
    const autoCircleHexSize = artDiag + currentSilhouetteExp * 2;
    const isAutoShape = cutterShape === 'square' || cutterShape === 'circle' || cutterShape === 'hexagon';
    const autoSize = cutterShape === 'square' ? autoSquareSize : autoCircleHexSize;

    const effectiveCutterW = isAutoShape ? autoSize : Math.max(cutterW, minCutterW);
    const effectiveCutterH = isAutoShape ? autoSize : Math.max(cutterH, minCutterH);


    const [svgPreview, setSvgPreview] = useState<{
        originalSvg: string;
        thickenedSvg: string;
        silhouetteSvg: string;
    } | null>(null);

    // Ref for hidden file input — allows programmatic trigger AND value-reset (fixes same-filename bug)
    const fileInputRef = useRef<HTMLInputElement>(null);
    const triggerFilePicker = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // reset so same filename triggers onChange
            fileInputRef.current.click();
        }
    };

    const handleSvgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSvgFile(file);

        const reader = new FileReader();
        reader.onload = async (evt) => {
            const text = evt.target?.result as string;
            if (!text) return;
            setSvgText(text);

            // Extract natural SVG dimensions for aspect ratio
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'image/svg+xml');
                const svgEl = doc.querySelector('svg');
                let natW = 0, natH = 0;
                if (svgEl) {
                    const vb = svgEl.getAttribute('viewBox');
                    if (vb) {
                        const parts = vb.split(/[\s,]+/).map(Number);
                        if (parts.length >= 4) { natW = parts[2]; natH = parts[3]; }
                    }
                    if (!natW) natW = parseFloat(svgEl.getAttribute('width') || '0');
                    if (!natH) natH = parseFloat(svgEl.getAttribute('height') || '0');
                }
                if (natW > 0 && natH > 0) {
                    const ratio = natW / natH;
                    setSvgAspectRatio(ratio);
                    setArtHeight(70);
                    setArtWidth(Math.round(70 * ratio * 10) / 10);
                }
            } catch (_) { }

            try {
                // Ao carregar pela primeira vez, usa o valor atual do estado dinâmico (fallback 0.5)
                const currentLineOffset = dynamicParams['line_offset'] ?? 0.5;
                const processed = await processSvgFile(text, currentLineOffset, 3.0);
                setSvgPreview(processed);
                setIsModalOpen(true);
            } catch (err) {
                console.error("SVG Processing Error:", err);
                alert("Erro ao processar o arquivo SVG. Tem certeza que há geometria vetorial?");
            }
        };
        reader.readAsText(file);
    };

    const handleHeightChange = (val: number) => {
        setArtHeight(val);
        if (lockAspectRatio) setArtWidth(Math.round(val * svgAspectRatio * 10) / 10);
    };

    const handleWidthChange = (val: number) => {
        setArtWidth(val);
        if (lockAspectRatio) setArtHeight(Math.round(val / svgAspectRatio * 10) / 10);
    };

    const handleModalConfirm = (processed: any, finalThickness: number) => {
        setSvgPreview(processed);
        handleDynamicParamChange('line_offset', finalThickness); // Atualiza o parâmetro dinâmico
        setIsModalOpen(false);
    };

    const handleGenerateClick = async () => {
        if (!svgPreview) return;
        setIsGenerating(true);
        setCarimbBaseUrl(null);
        setCarimbArteUrl(null);
        setCortadorUrl(null);
        setTmfUrl(null);
        try {
            const formData = new FormData();
            const linhasBlob = new Blob([svgPreview.thickenedSvg], { type: 'image/svg+xml' });
            const silhuetaBlob = new Blob([svgPreview.silhouetteSvg], { type: 'image/svg+xml' });

            formData.append('linhas_svg', linhasBlob, 'linhas.svg');
            formData.append('silhueta_svg', silhuetaBlob, 'silhueta.svg');

            formData.append('base_height', '2.0');
            formData.append('art_width', artWidth.toString());
            formData.append('art_height', artHeight.toString());
            formData.append('cutter_shape', cutterShape);
            formData.append('cutter_width', effectiveCutterW.toString());
            formData.append('cutter_height', effectiveCutterH.toString());

            // Envia todos os parâmetros dinâmicos lidos do config.json
            if (modelConfig && modelConfig.parameters) {
                modelConfig.parameters.forEach((param: any) => {
                    let val = dynamicParams[param.id] ?? param.default;
                    // Se houver um multiplicador (ex: transformar px em mm pro SCAD)
                    if (param.scad_multiplier) {
                        val = val * param.scad_multiplier;
                    }
                    formData.append(param.id, val.toString());
                });
            }

            const res = await axios.post('http://localhost:8000/api/generate/cortador_cookie', formData);

            if (res.data?.files) {
                const base = 'http://localhost:8000';
                if (res.data.files.carimbo_base) setCarimbBaseUrl(`${base}${res.data.files.carimbo_base}`);
                if (res.data.files.carimbo_arte) setCarimbArteUrl(`${base}${res.data.files.carimbo_arte}`);
                if (res.data.files.cortador) setCortadorUrl(`${base}${res.data.files.cortador}`);                if (res.data.files['3mf']) setTmfUrl(`${base}${res.data.files['3mf']}`);            }
        } catch (err) {
            console.error("Error generating piecess:", err);
            alert("Falha ao gerar o modelo 3D.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-200 flex flex-col font-sans">
            <SvgPreviewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleModalConfirm}
                onLoadAnother={() => { setIsModalOpen(false); triggerFilePicker(); }}
                svgText={svgText}
                initialThickness={dynamicParams['line_offset'] ?? 0.5}
            />

            {/* Header Pipeline Status */}
            <header className="flex items-center justify-between px-6 py-4 bg-neutral-950 border-b border-neutral-800">
                <Link to="/" className="flex items-center gap-3 text-emerald-500 font-bold text-xl tracking-wide hover:text-emerald-400 transition-colors">
                    <Scissors className="w-6 h-6" />
                    <span>TRECOLETES 3D</span>
                </Link>
                <div className="text-sm text-neutral-500 flex items-center gap-2">
                    <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1"><Home className="w-4 h-4" /> Vitrine</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-neutral-400">Produtos</span>
                    <ChevronRight className="w-3 h-3" />
                    <strong className="text-emerald-400">Gerador: Cortador de Biscoito</strong>
                </div>
            </header>

            {/* Main App Layout */}
            <main className="flex-1 flex overflow-hidden">

                {/* Left Sidebar Controls */}
                <aside className="w-96 flex-shrink-0 bg-neutral-900 border-r border-neutral-800 flex flex-col overflow-y-auto">
                    <div className="p-6 space-y-8">

                        {/* Section: Upload SVG */}
                        <div className="space-y-3">
                            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                                <Upload className="w-4 h-4" /> Arte Principal
                            </h2>

                            {/* Hidden file input — triggered programmatically */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                className="hidden"
                                accept=".svg"
                                onChange={handleSvgUpload}
                            />

                            {/* Upload area: if SVG loaded → reopen modal; else → open picker */}
                            {svgPreview ? (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full block border-2 border-emerald-700/50 hover:border-emerald-500 rounded-lg p-4 text-center cursor-pointer transition-colors bg-neutral-950/50"
                                >
                                    <span className="text-emerald-400 font-medium text-sm">{svgFile ? svgFile.name : 'Arte carregada'}</span>
                                </button>
                            ) : (
                                <button
                                    onClick={triggerFilePicker}
                                    className="w-full block border-2 border-dashed border-neutral-700 hover:border-emerald-500 rounded-lg p-4 text-center cursor-pointer transition-colors bg-neutral-950/50"
                                >
                                    <span className="text-emerald-400 font-medium text-sm">Selecionar arquivo SVG</span>
                                </button>
                            )}

                            {/* SVG Preview thumbnail */}
                            {svgPreview && (
                                <div className="relative rounded-lg overflow-hidden border border-neutral-700" style={{ backgroundColor: '#f0ebe3' }}>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: svgPreview.thickenedSvg }}
                                        className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-48 [&>svg]:object-contain p-2"
                                    />
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="absolute top-2 right-2 text-xs bg-neutral-900/80 hover:bg-emerald-700 text-neutral-300 hover:text-white px-2 py-1 rounded border border-neutral-700 transition-colors backdrop-blur-sm"
                                    >
                                        Editar
                                    </button>
                                </div>
                            )}

                            {/* Section: Parameters */}
                            <div className="space-y-4">
                                <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                                    <Sliders className="w-4 h-4" /> Configurações
                                </h2>

                                {/* Art Size */}
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-300 font-medium">Tamanho da Arte</label>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 space-y-1">
                                            <span className="text-xs text-neutral-500">Altura</span>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="number"
                                                    min="10" max="300" step="1"
                                                    value={artHeight}
                                                    onChange={e => handleHeightChange(parseFloat(e.target.value) || 0)}
                                                    className="w-full bg-neutral-800 border border-neutral-700 rounded px-2 py-1.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                                                />
                                                <span className="text-xs text-neutral-500">mm</span>
                                            </div>
                                        </div>

                                        {/* Lock aspect ratio */}
                                        <button
                                            onClick={() => setLockAspectRatio(l => !l)}
                                            title={lockAspectRatio ? 'Travar proporção (ativo)' : 'Travar proporção (inativo)'}
                                            className={`self-center mt-4 p-1.5 rounded border transition-colors ${lockAspectRatio ? 'bg-emerald-700 border-emerald-500 text-white' : 'bg-neutral-800 border-neutral-700 text-neutral-500 hover:border-neutral-500'}`}
                                        >
                                            {lockAspectRatio ? (
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" /></svg>
                                            )}
                                        </button>

                                        <div className="flex-1 space-y-1">
                                            <span className="text-xs text-neutral-500">Largura</span>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="number"
                                                    min="10" max="300" step="1"
                                                    value={artWidth}
                                                    onChange={e => handleWidthChange(parseFloat(e.target.value) || 0)}
                                                    className="w-full bg-neutral-800 border border-neutral-700 rounded px-2 py-1.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                                                />
                                                <span className="text-xs text-neutral-500">mm</span>
                                            </div>
                                        </div>
                                    </div>
                                    {lockAspectRatio && <p className="text-xs text-emerald-600/70">🔒 Proporção travada — {svgAspectRatio.toFixed(2)}:1</p>}
                                </div>

                                {/* Parâmetros Dinâmicos (Server-Driven) */}
                                {modelConfig?.parameters
                                    ?.filter((p: any) => p.id !== 'line_offset') // line_offset é editado no modal
                                    .map((param: any) => {
                                        const currentValue = dynamicParams[param.id] ?? param.default;

                                        if (param.type === 'boolean') {
                                            return (
                                                <div key={param.id} className="space-y-2 pt-2 pb-1">
                                                    <label className="flex items-start gap-3 cursor-pointer group">
                                                        <div className="relative flex-shrink-0 flex items-center justify-center mt-0.5">
                                                            <input
                                                                type="checkbox"
                                                                checked={Boolean(currentValue)}
                                                                onChange={e => handleDynamicParamChange(param.id, e.target.checked)}
                                                                className="w-5 h-5 rounded border-neutral-600 bg-neutral-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-neutral-900 transition-colors cursor-pointer appearance-none checked:bg-emerald-500 checked:border-emerald-500"
                                                            />
                                                            {currentValue && (
                                                                <svg className="w-3.5 h-3.5 absolute text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                            )}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-medium text-neutral-200 group-hover:text-emerald-400 transition-colors">{param.name}</span>
                                                            {param.description && <span className="text-xs text-neutral-500">{param.description}</span>}
                                                        </div>
                                                    </label>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div key={param.id} className="space-y-2">
                                                <label className="flex justify-between text-sm">
                                                    <span>{param.name}</span>
                                                    <span className="text-emerald-400 font-mono">
                                                        {Number(currentValue).toFixed(1)}{param.unit}
                                                    </span>
                                                </label>
                                                <input
                                                    type="range"
                                                    min={param.min}
                                                    max={param.max}
                                                    step={param.step}
                                                    value={Number(currentValue)}
                                                    onChange={e => handleDynamicParamChange(param.id, parseFloat(e.target.value))}
                                                    className="w-full accent-emerald-500"
                                                />
                                                {param.description && <p className="text-xs text-neutral-500">{param.description}</p>}
                                            </div>
                                        );
                                    })}

                                {/* Cutter shape */}
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-300 font-medium">Formato do Cortador</label>
                                    <select
                                        value={cutterShape}
                                        onChange={e => setCutterShape(e.target.value as typeof cutterShape)}
                                        className="w-full bg-neutral-800 border border-neutral-700 rounded px-2 py-1.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                                    >
                                        <option value="silhouette">Silhueta da arte</option>
                                        <option value="square">Quadrado</option>
                                        <option value="circle">Círculo</option>
                                        <option value="rectangle">Retângulo</option>
                                        <option value="hexagon">Hexágono</option>
                                    </select>

                                    {/* Auto shapes: show computed size (read-only) */}
                                    {isAutoShape && (
                                        <p className="text-xs text-emerald-500/80">
                                            {cutterShape === 'circle' ? 'Diâmetro' : cutterShape === 'hexagon' ? 'Largura (faces)' : 'Lado'}: {autoSize.toFixed(1)} mm (auto)
                                        </p>
                                    )}

                                    {/* Rectangle: editable width + height with minimum */}
                                    {cutterShape === 'rectangle' && (
                                        <div className="space-y-2 pt-1">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 space-y-1">
                                                    <span className="text-xs text-neutral-500">Largura</span>
                                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="number"
                                                            min={Math.ceil(minCutterW)}
                                                            step="1"
                                                            value={Math.max(cutterW, minCutterW)}
                                                            onChange={e => setCutterW(Math.max(parseFloat(e.target.value) || minCutterW, minCutterW))}
                                                            className="w-full bg-neutral-800 border border-neutral-700 rounded px-2 py-1.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                                                        />
                                                        <span className="text-xs text-neutral-500">mm</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <span className="text-xs text-neutral-500">Altura</span>
                                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="number"
                                                            min={Math.ceil(minCutterH)}
                                                            step="1"
                                                            value={Math.max(cutterH, minCutterH)}
                                                            onChange={e => setCutterH(Math.max(parseFloat(e.target.value) || minCutterH, minCutterH))}
                                                            className="w-full bg-neutral-800 border border-neutral-700 rounded px-2 py-1.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                                                        />
                                                        <span className="text-xs text-neutral-500">mm</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-xs text-neutral-500">Mínimo: {minCutterW.toFixed(0)} × {minCutterH.toFixed(0)} mm (arte + espaçamento)</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Section: Colors */}
                    <div className="space-y-3">
                        <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
                            Cores da Visualização
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Modelo', color: modelColor, setter: setModelColor },
                                { label: 'Arte', color: artColor, setter: setArtColor },
                            ].map(({ label, color, setter }) => (
                                <div key={label} className="flex flex-col items-center gap-1.5">
                                    <label className="text-xs text-neutral-500">{label}</label>
                                    <label className="relative cursor-pointer group">
                                        <div
                                            className="w-12 h-12 rounded-lg border-2 border-neutral-700 group-hover:border-emerald-500 transition-colors shadow-inner"
                                            style={{ backgroundColor: color }}
                                        />
                                        <input
                                            type="color"
                                            value={color}
                                            onChange={e => setter(e.target.value)}
                                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                        />
                                    </label>
                                    <span className="text-[10px] font-mono text-neutral-600">{color}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-neutral-600">Apenas para visualização — não afeta o STL exportado.</p>
                    </div>

                    {/* Generate Button Fixed Bottom */}
                    <div className="mt-auto p-4 border-t border-neutral-800 bg-neutral-950">
                        <button
                            onClick={handleGenerateClick}
                            disabled={!svgFile || isGenerating}
                            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded shadow-lg shadow-emerald-500/20 transition-all font-sans"
                        >
                            {isGenerating ? 'Gerando OpenSCAD...' : 'Gerar Peças 3D'}
                        </button>
                    </div>
                </aside>

                {/* Right Viewer Canvas */}
                <section className="flex-1 p-4 relative min-w-0 min-h-0 flex flex-col gap-3">
                    <div className="flex-1 relative min-h-0">
                        <div className="absolute inset-0">
                            <Viewer3D
                                carimbBaseUrl={carimbBaseUrl}
                                carimbArteUrl={carimbArteUrl}
                                cortadorUrl={cortadorUrl}
                                isGenerating={isGenerating}
                                artColor={artColor}
                                modelColor={modelColor}
                            />
                        </div>
                    </div>
                    {tmfUrl && (
                        <div className="flex-shrink-0 flex justify-center">
                            <button
                                onClick={() => downloadBlob(tmfUrl, 'cortador_cookie_all.3mf')}
                                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/40 transition-colors text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Baixar 3MF Multicolor
                            </button>
                        </div>
                    )}
                </section>

            </main>
        </div>
    );
}

function TestHolesVertical() {
    const [holes, setHoles] = React.useState<number[]>([5, 5.2]);
    const [margin, setMargin] = React.useState(2);
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [modelUrl, setModelUrl] = React.useState<string | null>(null);

    // Carrega defaults do config.json via API
    React.useEffect(() => {
        axios.get('http://localhost:8000/api/models/test_holes_vertical/config')
            .then(res => {
                const params: any[] = res.data?.parameters ?? [];
                params.forEach((p: any) => {
                    if (p.id === 'holes' && Array.isArray(p.default)) setHoles(p.default);
                    if (p.id === 'margin') setMargin(Number(p.default));
                });
            })
            .catch(() => { /* mantém defaults hardcoded */ });
    }, []);
    const [error, setError] = React.useState<string | null>(null);

    // Dimensões calculadas em tempo real
    const maxD = holes.length > 0 ? Math.max(...holes) : 0;
    const sumD = holes.reduce((s, v) => s + v, 0);
    const dimW = sumD + margin * (holes.length + 1);  // X variável
    const dimD = 15;                                   // Y fixo
    const dimH = maxD + margin * 2;                    // Z = maior furo + margens

    const addHole = () => setHoles(prev => [...prev, 5]);
    const removeHole = (i: number) => setHoles(prev => prev.filter((_, idx) => idx !== i));
    const updateHole = (i: number, val: number) =>
        setHoles(prev => prev.map((v, idx) => (idx === i ? val : v)));

    const handleGenerate = async () => {
        if (holes.length === 0) return;
        setIsGenerating(true);
        setError(null);
        setModelUrl(null);
        try {
            const form = new FormData();
            form.append('holes', `[${holes.join(', ')}]`);
            form.append('margin', String(margin));
            const res = await axios.post(
                'http://localhost:8000/api/generate_parametric/test_holes_vertical',
                form,
            );
            if (res.data?.files?.model) {
                setModelUrl(`http://localhost:8000${res.data.files.model}`);
            }
        } catch (err: any) {
            setError(err?.response?.data?.error ?? 'Erro desconhecido');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-200 flex flex-col font-sans">
            {/* Header */}
            <header className="flex items-center gap-4 px-6 py-4 bg-neutral-950 border-b border-neutral-800">
                <Link to="/" className="text-neutral-500 hover:text-amber-400 transition-colors">
                    <Home className="w-5 h-5" />
                </Link>
                <ChevronRight className="w-4 h-4 text-neutral-700" />
                <div className="flex items-center gap-2 text-amber-500 font-bold tracking-wide">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <circle cx="12" cy="8" r="2" />
                        <circle cx="12" cy="16" r="2" />
                    </svg>
                    Teste de Furos Verticais
                </div>
            </header>

            <main className="flex flex-1 min-h-0 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-80 flex-shrink-0 bg-neutral-950 border-r border-neutral-800 flex flex-col overflow-y-auto">
                    <div className="p-4 space-y-6 flex-1">

                        {/* Furos */}
                        <div className="space-y-3">
                            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                                <Sliders className="w-4 h-4" /> Furos a testar
                            </h2>
                            <p className="text-xs text-neutral-500">Cada furo adiciona (⌀ + 2×margem) à altura e profundidade da peça.</p>

                            <div className="space-y-2">
                                {holes.map((d, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="text-xs text-neutral-600 w-4 text-right">{i + 1}.</span>
                                        <input
                                            type="number"
                                            min={1}
                                            max={13}
                                            step={0.1}
                                            value={d}
                                            onChange={e => updateHole(i, parseFloat(e.target.value) || 1)}
                                            className="flex-1 bg-neutral-800 border border-neutral-700 rounded px-2 py-1.5 text-sm text-white focus:border-amber-500 focus:outline-none"
                                        />
                                        <span className="text-xs text-neutral-500">mm</span>
                                        <button
                                            onClick={() => removeHole(i)}
                                            disabled={holes.length <= 1}
                                            className="text-neutral-600 hover:text-red-400 transition-colors disabled:opacity-30"
                                            title="Remover furo"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={addHole}
                                className="w-full py-2 rounded-lg border border-dashed border-neutral-700 hover:border-amber-500 text-neutral-500 hover:text-amber-400 text-sm transition-colors"
                            >
                                + Adicionar furo
                            </button>
                        </div>

                        {/* Margem */}
                        <div className="space-y-2">
                            <label className="flex justify-between text-sm">
                                <span>Margem</span>
                                <span className="text-amber-400 font-mono">{margin.toFixed(1)} mm</span>
                            </label>
                            <input
                                type="range"
                                min={1} max={5} step={0.5}
                                value={margin}
                                onChange={e => setMargin(parseFloat(e.target.value))}
                                className="w-full accent-amber-500"
                            />
                        </div>

                        {/* Dimensões calculadas */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 space-y-1.5">
                            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">Dimensões calculadas</h3>
                            {[
                                { label: 'Largura (X)', value: dimW },
                                { label: 'Profundidade (Y)', value: dimD },
                                { label: 'Altura (Z)', value: dimH },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex justify-between text-sm">
                                    <span className="text-neutral-500">{label}</span>
                                    <span className="text-amber-300 font-mono">{value.toFixed(1)} mm</span>
                                </div>
                            ))}
                        </div>

                        {error && (
                            <div className="bg-red-950 border border-red-800 rounded-lg p-3 text-sm text-red-300">
                                {error}
                            </div>
                        )}
                    </div>

                    {/* Generate button */}
                    <div className="p-4 border-t border-neutral-800 bg-neutral-950">
                        <button
                            onClick={handleGenerate}
                            disabled={holes.length === 0 || isGenerating}
                            className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded shadow-lg shadow-amber-500/20 transition-all"
                        >
                            {isGenerating ? 'Gerando...' : 'Gerar STL'}
                        </button>
                    </div>
                </aside>

                {/* Viewer */}
                <section className="flex-1 p-4 relative min-w-0 min-h-0 flex flex-col gap-3">
                    <div className="flex-1 relative min-h-0">
                        <div className="absolute inset-0">
                            <Viewer3D
                                carimbBaseUrl={modelUrl}
                                carimbArteUrl={null}
                                cortadorUrl={null}
                                isGenerating={isGenerating}
                                artColor="#f5f0e8"
                                modelColor="#f59e0b"
                            />
                        </div>
                    </div>
                    {modelUrl && (
                        <div className="flex-shrink-0 flex justify-center">
                            <button
                                onClick={() => downloadBlob(modelUrl, 'test_holes_vertical.stl')}
                                className="flex items-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg shadow-lg shadow-amber-900/40 transition-colors text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Baixar STL
                            </button>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

const BAMBU_COLORS = [
    { label: 'Branco', hex: '#FFFFFF' },
    { label: 'Preto', hex: '#000000' },
    { label: 'Azul', hex: '#1B40D1' },
    { label: 'Verde', hex: '#00C853' },
    { label: 'Vermelho', hex: '#F44336' },
    { label: 'Amarelo', hex: '#FFEB3B' },
    { label: 'Cinza', hex: '#9E9E9E' },
    { label: 'Marrom', hex: '#795548' },
];

function BambuColorPicker({
    label,
    color,
    extruder,
    onChangeColor,
    onChangeExtruder
}: {
    label: string;
    color: string;
    extruder: number;
    onChangeColor: (val: string) => void;
    onChangeExtruder: (val: number) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedColor = BAMBU_COLORS.find(c => c.hex.toLowerCase() === String(color).toLowerCase()) || BAMBU_COLORS[0];

    return (
        <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-neutral-400 flex-1">{label}</label>

            <div className="flex items-center gap-3">
                {/* Color Dropdown */}
                <div className={`relative ${isOpen ? 'z-50' : ''}`} ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center p-1 border border-transparent hover:border-neutral-700 rounded transition-colors"
                    >
                        <div className="w-8 h-8 rounded-sm shadow-inner" style={{ backgroundColor: selectedColor.hex }} />
                    </button>

                    {isOpen && (
                        <div className="absolute z-50 top-full right-0 mt-1 p-2 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl grid gap-1 min-w-[140px]">
                            {BAMBU_COLORS.map(c => (
                                <button
                                    key={c.hex}
                                    type="button"
                                    onClick={() => {
                                        onChangeColor(c.hex);
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-2 py-1.5 hover:bg-neutral-800 rounded transition-colors text-left"
                                >
                                    <div className="w-5 h-5 rounded-sm shadow-inner shrink-0" style={{ backgroundColor: c.hex }} />
                                    <span className="text-xs text-neutral-300 font-medium flex-1">{c.label}</span>
                                    {c.hex.toLowerCase() === String(color).toLowerCase() && (
                                        <svg className="w-4 h-4 ml-auto text-violet-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Extruder input */}
                <div className="flex flex-col items-center">
                    <label className="text-[10px] font-bold text-neutral-500 mb-0.5 uppercase tracking-widest">#</label>
                    <input
                        type="text"
                        value={extruder}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (val === '') {
                                onChangeExtruder(1);
                                return;
                            }
                            const num = parseInt(val);
                            if (!isNaN(num) && num >= 1 && num <= 5) {
                                onChangeExtruder(num);
                            }
                        }}
                        className="w-10 bg-neutral-800 border border-neutral-700 rounded px-1.5 py-1 text-sm text-center text-white focus:border-violet-500 focus:outline-none placeholder-neutral-600"
                        placeholder="1"
                    />
                </div>
            </div>
        </div>
    );
}

function NameTopper() {
    const [config, setConfig] = React.useState<any>(null);
    const [params, setParams] = React.useState<Record<string, any>>({});
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [baseUrl, setBaseUrl] = React.useState<string | null>(null);
    const [lettersUrl, setLettersUrl] = React.useState<string | null>(null);
    const [tmfUrl, setTmfUrl] = React.useState<string | null>(null);
    const [fromCache, setFromCache] = React.useState<boolean | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    // Controla quais seções estão abertas (abertas por padrão: Linha 2 e Ajustes Finos fechadas)
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({});

    // Batch generation state
    const [batchNames, setBatchNames] = React.useState<{nome: string}[] | null>(null);
    const [batchId, setBatchId] = React.useState<string | null>(null);
    const [batchProgress, setBatchProgress] = React.useState<{done: number, total: number} | null>(null);
    const [batchTmfUrl, setBatchTmfUrl] = React.useState<string | null>(null);
    const [batchFromCache, setBatchFromCache] = React.useState<boolean | null>(null);
    const batchFileRef = React.useRef<HTMLInputElement>(null);
    const pollRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
    const [isClearingCache, setIsClearingCache] = React.useState(false);

    const handleClearCache = async () => {
        setIsClearingCache(true);
        try {
            await axios.post('http://localhost:8000/api/clear_cache');
            setTmfUrl(null);
            setBaseUrl(null);
            setLettersUrl(null);
            setFromCache(null);
            setBatchTmfUrl(null);
            setBatchFromCache(null);
            setBatchProgress(null);
            setBatchId(null);
        } catch { /* silencioso */ }
        setIsClearingCache(false);
    };

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/models/name_topper/config')
            .then(res => {
                const cfg = res.data;
                setConfig(cfg);
                const initial: Record<string, any> = {};
                const setDefaults = (list: any[]) => list?.forEach((p: any) => { initial[p.id] = p.default; });
                setDefaults(cfg.parameters);
                cfg.sections?.forEach((s: any) => setDefaults(s.parameters));
                
                // Defaults for extruders explicitly mapped
                initial['extrusor_base'] = 1;
                initial['extrusor_letras'] = 4;
                
                setParams(initial);
                // Define estado inicial dos acordeões
                const initOpen: Record<string, boolean> = {};
                cfg.sections?.forEach((s: any) => {
                    // "Linha 2" começa fechada; demais abertas
                    initOpen[s.name] = !s.name.includes('Linha 2');
                });
                setOpenSections(initOpen);
            })
            .catch(() => {});
    }, []);

    const toggleSection = (name: string) =>
        setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));

    const setParam = (id: string, val: any) => setParams(prev => ({ ...prev, [id]: val }));

    const handleGenerate = async () => {
        setIsGenerating(true);
        setError(null);
        setBaseUrl(null);
        setLettersUrl(null);
        setTmfUrl(null);
        setFromCache(null);
        try {
            const form = new FormData();
            Object.entries(params).forEach(([k, v]) => form.append(k, String(v ?? '')));
            const res = await axios.post('http://localhost:8000/api/generate_parametric/name_topper', form);
            if (res.data?.files) {
                const host = 'http://localhost:8000';
                if (res.data.files.base)    setBaseUrl(`${host}${res.data.files.base}`);
                if (res.data.files.letters) setLettersUrl(`${host}${res.data.files.letters}`);
                if (res.data.files['3mf'])  setTmfUrl(`${host}${res.data.files['3mf']}`);
                setFromCache(res.data.from_cache ?? false);
            }
        } catch (err: any) {
            setError(err?.response?.data?.error ?? 'Erro desconhecido');
        } finally {
            setIsGenerating(false);
        }
    };

    // Cleanup polling on unmount
    React.useEffect(() => {
        return () => { if (pollRef.current) clearInterval(pollRef.current); };
    }, []);

    const handleBatchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            try {
                const data = JSON.parse(ev.target?.result as string);
                if (Array.isArray(data) && data.length > 0 && data.every((item: any) => typeof item.nome === 'string')) {
                    setBatchNames(data);
                    setBatchId(null);
                    setBatchProgress(null);
                    setBatchTmfUrl(null);
                    setError(null);
                } else {
                    setError('JSON inválido. Esperado: [{"nome":"ALICE"},...]');
                }
            } catch {
                setError('Não foi possível ler o JSON.');
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    };

    const handleBatchGenerate = async () => {
        if (!batchNames || batchNames.length === 0) return;
        if (pollRef.current) clearInterval(pollRef.current);
        setBatchId(null);
        setBatchProgress({ done: 0, total: batchNames.length });
        setBatchTmfUrl(null);
        setBatchFromCache(null);
        setError(null);
        try {
            const form = new FormData();
            form.append('names', JSON.stringify(batchNames));
            Object.entries(params)
                .filter(([k]) => k !== 'text_line_1')
                .forEach(([k, v]) => form.append(k, String(v ?? '')));
            const res = await axios.post('http://localhost:8000/api/generate_batch/name_topper', form);
            const id: string = res.data.batch_id;
            setBatchId(id);
            setBatchProgress({ done: res.data.done ?? 0, total: res.data.total });

            // Cache hit: já concluído, sem polling
            if (res.data.status === 'done') {
                setBatchProgress({ done: res.data.total, total: res.data.total });
                setBatchTmfUrl(`http://localhost:8000${res.data.file}`);
                setBatchFromCache(res.data.from_cache ?? false);
                return;
            }

            pollRef.current = setInterval(async () => {
                try {
                    const status = await axios.get(`http://localhost:8000/api/batch_status/${id}`);
                    const job = status.data;
                    setBatchProgress({ done: job.done, total: job.total });
                    if (job.status === 'done') {
                        clearInterval(pollRef.current!);
                        pollRef.current = null;
                        setBatchTmfUrl(`http://localhost:8000${job.file}`);
                        setBatchFromCache(false);  // novo processamento
                    } else if (job.status === 'error') {
                        clearInterval(pollRef.current!);
                        pollRef.current = null;
                        setError(job.error ?? 'Erro na geração em lote');
                    }
                } catch {
                    clearInterval(pollRef.current!);
                    pollRef.current = null;
                }
            }, 2000);
        } catch (err: any) {
            setError(err?.response?.data?.error ?? 'Erro ao iniciar lote');
            setBatchProgress(null);
        }
    };

    const renderParam = (p: any) => {
        const val = params[p.id] ?? p.default;
        switch (p.type) {
            case 'text':
                return (
                    <div key={p.id} className="space-y-1">
                        <label className="text-sm text-neutral-400">{p.name}</label>
                        <input
                            type="text" value={val} placeholder={p.placeholder ?? ''}
                            onChange={e => setParam(p.id, e.target.value)}
                            className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:border-violet-500 focus:outline-none"
                        />
                    </div>
                );
            case 'range':
                return (
                    <div key={p.id} className="space-y-1">
                        <label className="flex justify-between text-sm">
                            <span className="text-neutral-400">{p.name}</span>
                            <span className="text-violet-400 font-mono">
                                {Number(val).toFixed(p.step < 1 ? 1 : 0)}{p.unit ? ` ${p.unit}` : ''}
                            </span>
                        </label>
                        <input
                            type="range" min={p.min} max={p.max} step={p.step} value={val}
                            onChange={e => setParam(p.id, parseFloat(e.target.value))}
                            className="w-full accent-violet-500"
                        />
                    </div>
                );
            case 'color':
                const extField = p.id === 'base_color' ? 'extrusor_base' : 'extrusor_letras';
                const extVal = params[extField] ?? (p.id === 'base_color' ? 1 : 4);
                return (
                    <BambuColorPicker
                        key={p.id}
                        label={p.name}
                        color={val}
                        extruder={extVal}
                        onChangeColor={(newCol) => setParam(p.id, newCol)}
                        onChangeExtruder={(newExt) => setParam(extField, newExt)}
                    />
                );
            case 'select':
                return (
                    <div key={p.id} className="space-y-1">
                        <label className="text-sm text-neutral-400">{p.name}</label>
                        <select
                            value={val}
                            onChange={e => setParam(p.id, e.target.value)}
                            className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:border-violet-500 focus:outline-none"
                        >
                            {p.options?.map((opt: any) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                );
            default:
                return null;
        }
    };

    // Seções que NÃO são "Cores" — renderizadas na ordem normal
    const mainSections = config?.sections?.filter((s: any) => s.name !== 'Cores') ?? [];
    // Seção de Cores — renderizada por último
    const colorsSection = config?.sections?.find((s: any) => s.name === 'Cores');

    const renderAccordionSection = (section: any) => {
        const isOpen = openSections[section.name] ?? true;
        return (
            <div key={section.name} className={`border border-neutral-800 rounded-lg ${isOpen ? 'overflow-visible' : 'overflow-hidden'}`}>
                <button
                    type="button"
                    onClick={() => toggleSection(section.name)}
                    className="w-full flex items-center justify-between px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 transition-colors text-left"
                >
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                        {section.name}
                    </span>
                    <ChevronDown
                        className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-0' : '-rotate-90'
                        }`}
                    />
                </button>
                {isOpen && (
                    <div className="px-3 pb-3 pt-2 space-y-4 bg-neutral-950 rounded-b-lg">
                        {section.parameters?.map(renderParam)}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-200 flex flex-col font-sans">
            <header className="flex items-center gap-4 px-6 py-4 bg-neutral-950 border-b border-neutral-800">
                <Link to="/" className="text-neutral-500 hover:text-violet-400 transition-colors">
                    <Home className="w-5 h-5" />
                </Link>
                <ChevronRight className="w-4 h-4 text-neutral-700" />
                <div className="flex items-center gap-2 text-violet-400 font-bold tracking-wide">
                    <Type className="w-5 h-5" />
                    Letreiro Personalizado
                </div>
            </header>

            <main className="flex flex-1 min-h-0 overflow-hidden">
                <aside className="w-80 flex-shrink-0 bg-neutral-950 border-r border-neutral-800 flex flex-col">
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {!config && (
                            <p className="text-sm text-neutral-600 animate-pulse">Carregando configurações...</p>
                        )}
                        {config && (
                            <>
                                {/* Parâmetros principais sempre visíveis */}
                                <div className="space-y-4 pb-1">
                                    <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                                        <Sliders className="w-3.5 h-3.5" /> Texto
                                    </h2>
                                    {config.parameters?.map(renderParam)}
                                </div>
                                {/* Seções colapsáveis (exceto Cores) */}
                                {mainSections.map(renderAccordionSection)}
                                {/* Cores — última seção, antes do botão */}
                                {colorsSection && renderAccordionSection(colorsSection)}
                            </>
                        )}
                        {error && (
                            <div className="bg-red-950 border border-red-800 rounded-lg p-3 text-sm text-red-300">
                                {error}
                            </div>
                        )}
                    </div>
                    <div className="p-4 border-t border-neutral-800 bg-neutral-950 space-y-3">
                        <div className="flex gap-2">
                            <button
                                onClick={handleGenerate}
                                disabled={isGenerating || !config}
                                className="flex-1 py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded shadow-lg shadow-violet-900/40 transition-all"
                            >
                                {isGenerating ? 'Gerando...' : 'Gerar Modelo 3D'}
                            </button>
                            <button
                                onClick={handleClearCache}
                                disabled={isClearingCache || isGenerating}
                                title="Limpar cache — força nova geração na próxima vez"
                                className="px-3 py-3 bg-neutral-800 hover:bg-red-900 disabled:opacity-40 text-neutral-400 hover:text-red-300 rounded border border-neutral-700 hover:border-red-700 transition-all"
                            >
                                {isClearingCache
                                    ? <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                }
                            </button>
                        </div>

                        {/* Batch generation */}
                        <div className="border-t border-neutral-800 pt-3 space-y-2">
                            <input
                                ref={batchFileRef}
                                type="file"
                                accept=".json"
                                className="hidden"
                                onChange={handleBatchUpload}
                            />
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => batchFileRef.current?.click()}
                                    disabled={!config}
                                    className="flex-1 py-2 text-xs bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-neutral-300 font-medium rounded border border-neutral-700 transition-all"
                                >
                                    {batchNames ? `📋 ${batchNames.length} nomes` : '📂 Carregar JSON'}
                                </button>
                                {batchNames && !batchProgress && (
                                    <button
                                        type="button"
                                        onClick={handleBatchGenerate}
                                        disabled={!config}
                                        className="flex-1 py-2 text-xs bg-violet-800 hover:bg-violet-700 disabled:opacity-40 text-white font-semibold rounded border border-violet-700 transition-all"
                                    >
                                        Gerar em Lote
                                    </button>
                                )}
                            </div>
                            {batchProgress && (
                                <div className="space-y-1">
                                    <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="bg-violet-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${batchProgress.total > 0 ? (batchProgress.done / batchProgress.total) * 100 : 0}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-neutral-400 text-center">
                                        {batchTmfUrl
                                            ? 'Lote concluído!'
                                            : `${batchProgress.done} de ${batchProgress.total} renderizados...`}
                                    </p>
                                </div>
                            )}
                            {batchTmfUrl && (
                                <div className="space-y-1.5">
                                    {batchFromCache !== null && (
                                        <p className={`text-xs text-center font-medium ${batchFromCache ? 'text-amber-400' : 'text-emerald-400'}`}>
                                            {batchFromCache ? '\u26a1 Do cache (mesmos par\u00e2metros)' : '\u2714 Reci\u00e9m gerado'}
                                        </p>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => downloadBlob(batchTmfUrl!, 'name_topper_lote.zip')}
                                        className="w-full py-2 flex items-center justify-center gap-2 text-xs bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded transition-all"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        Baixar Lote (ZIP com 3MFs)
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </aside>

                <section className="flex-1 p-4 relative min-w-0 min-h-0 flex flex-col gap-3">
                    <div className="flex-1 relative min-h-0">
                        <div className="absolute inset-0">
                            <Viewer3D
                                carimbBaseUrl={baseUrl}
                                carimbArteUrl={lettersUrl}
                                cortadorUrl={null}
                                isGenerating={isGenerating}
                                artColor={(params['letters_color'] as string) ?? '#FFFFFF'}
                                modelColor={(params['base_color'] as string) ?? '#1B40D1'}
                            />
                        </div>
                    </div>
                    {tmfUrl && (
                        <div className="flex-shrink-0 flex flex-col items-center gap-1">
                            {fromCache !== null && (
                                <p className={`text-xs font-medium ${fromCache ? 'text-amber-400' : 'text-emerald-400'}`}>
                                    {fromCache ? '\u26a1 Do cache (mesmos par\u00e2metros)' : '\u2714 Reci\u00e9m gerado'}
                                </p>
                            )}
                            <button
                                onClick={() => downloadBlob(tmfUrl!, 'name_topper_all.3mf')}
                                className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg shadow-lg shadow-violet-900/40 transition-colors text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Baixar 3MF
                            </button>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

function Vitrine() {
    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-200 flex flex-col font-sans">
            <header className="flex items-center justify-between px-6 py-4 bg-neutral-950 border-b border-neutral-800">
                <div className="flex items-center gap-3 text-emerald-500 font-bold text-xl tracking-wide">
                    <Scissors className="w-6 h-6" />
                    <span>TRECOLETES 3D</span>
                </div>
            </header>
            <main className="flex-1 p-12 flex flex-col items-center">
                <h1 className="text-4xl justify-center font-bold text-emerald-500 mb-2">Vitrine de Produtos</h1>
                <p className="text-neutral-400 mb-12 text-center text-lg">Escolha uma ferramenta abaixo para começar a gerar seus modelos 3D.</p>
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link to="/gerador/cortador_cookie" className="group bg-neutral-950 border border-neutral-800 p-8 rounded-2xl hover:border-emerald-500 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] block">
                        <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 text-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Scissors className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors mb-3">Cortador de Biscoito</h2>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Gere conjuntos de cortador e carimbo para biscoitos e massas usando apenas arquivos SVG em 2D.
                        </p>
                    </Link>
                    <Link to="/gerador/test_holes_vertical" className="group bg-neutral-950 border border-neutral-800 p-8 rounded-2xl hover:border-amber-500 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] block">
                        <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 text-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="8" r="2" />
                                <circle cx="12" cy="16" r="2" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold group-hover:text-amber-400 transition-colors mb-3">Teste de Furos Verticais</h2>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Gere um cubo de teste para calibrar furos verticais (como os do name topper). Largura fixa de 15 mm.
                        </p>
                    </Link>
                    <Link to="/gerador/name_topper" className="group bg-neutral-950 border border-neutral-800 p-8 rounded-2xl hover:border-violet-500 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] block">
                        <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 text-violet-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Type className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold group-hover:text-violet-400 transition-colors mb-3">Letreiro Personalizado</h2>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Crie letreiros 3D multicolor com texto em duas linhas, escolha de fonte, cores e furação para chaveiro ou topper de bolo.
                        </p>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Vitrine />} />
                <Route path="/gerador/cortador_cookie" element={<Generator />} />
                <Route path="/gerador/test_holes_vertical" element={<TestHolesVertical />} />
                <Route path="/gerador/name_topper" element={<NameTopper />} />
            </Routes>
        </BrowserRouter>
    );
}
