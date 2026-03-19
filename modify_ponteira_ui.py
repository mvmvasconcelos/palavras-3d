import sys
import re

with open(r'c:\Users\IFSUL\Documents\dev\palavras-3d\trecoletes-3d\frontend\src\App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Split text into parts to isolate PonteiraLapisSvgGenerator
ponteira_start_idx = text.find('function PonteiraLapisSvgGenerator() {')
if ponteira_start_idx == -1:
    print("Function not found!")
    sys.exit(1)

test_holes_start_idx = text.find('function TestHolesVertical() {')
if test_holes_start_idx == -1:
    test_holes_start_idx = len(text)

part1 = text[:ponteira_start_idx]
ponteira_text = text[ponteira_start_idx:test_holes_start_idx]
part3 = text[test_holes_start_idx:]

# Now perform replacements ON ponteira_text ONLY.
# 1. State changes
state_old = """    const [tmfUrl, setTmfUrl] = useState<string | null>(null);

    // Initial load
    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/models/ponteira_lapis_svg/config');
                setModelConfig(res.data);
                if (res.data.parameters) {
                    const initial: Record<string, any> = {};
                    res.data.parameters.forEach((p: any) => {
                        initial[p.id] = p.default;
                    });
                    setDynamicParams(initial);
                }
            } catch (err) {
                console.error("Failed to load model config:", err);
            }
        };
        fetchConfig();
        return () => { isMounted = false; };
    }, []);"""

state_new = """    const [tmfUrl, setTmfUrl] = useState<string | null>(null);

    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
    const toggleSection = (name: string) =>
        setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));

    // Initial load
    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/models/ponteira_lapis_svg/config');
                const cfg = res.data;
                setModelConfig(cfg);
                
                const initial: Record<string, any> = {};
                const setDefaults = (list: any[]) => list?.forEach((p: any) => { initial[p.id] = p.default; });
                setDefaults(cfg.parameters);
                cfg.sections?.forEach((s: any) => setDefaults(s.parameters));
                setDynamicParams(initial);

                const initOpen: Record<string, boolean> = {};
                cfg.sections?.forEach((s: any) => {
                    initOpen[s.name] = true;
                });
                setOpenSections(initOpen);
            } catch (err) {
                console.error("Failed to load model config:", err);
            }
        };
        fetchConfig();
        return () => { isMounted = false; };
    }, []);"""

if state_old not in ponteira_text:
    print("Could not find state_old")
ponteira_text = ponteira_text.replace(state_old, state_new)

# 2. FormData
formdata_old = """            formData.append('base_height', '2.0');
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
            }"""

formdata_new = """            formData.append('art_width', artWidth.toString());
            formData.append('art_height', artHeight.toString());

            // Envia todos os parâmetros dinâmicos lidos do config.json
            Object.entries(dynamicParams).forEach(([k, v]) => {
                if (v !== undefined && v !== null) {
                    formData.append(k, String(v));
                }
            });"""

if formdata_old not in ponteira_text:
    print("Could not find formdata_old")
ponteira_text = ponteira_text.replace(formdata_old, formdata_new)

# 3. Helpers
helpers_new = """    const renderParam = (p: any) => {
        const val = dynamicParams[p.id] ?? p.default;
        switch (p.type) {
            case 'text':
                return (
                    <div key={p.id} className="space-y-1">
                        <label className="text-sm text-neutral-400">{p.name}</label>
                        <input
                            type="text" value={val} placeholder={p.placeholder ?? ''}
                            onChange={e => handleDynamicParamChange(p.id, e.target.value)}
                            className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>
                );
            case 'range':
                return (
                    <div key={p.id} className="space-y-1">
                        <label className="flex justify-between text-sm">
                            <span className="text-neutral-400">{p.name}</span>
                            <span className="text-emerald-400 font-mono">
                                {Number(val).toFixed(p.step < 1 ? 1 : 0)}{p.unit ? ` ${p.unit}` : ''}
                            </span>
                        </label>
                        <input
                            type="range" min={p.min} max={p.max} step={p.step} value={val}
                            onChange={e => handleDynamicParamChange(p.id, parseFloat(e.target.value))}
                            className="w-full accent-emerald-500"
                        />
                    </div>
                );
            case 'color':
                const extField = p.id === 'base_color' ? 'extrusor_base' : 'extrusor_letras';
                const extVal = dynamicParams[extField] ?? (p.id === 'base_color' ? 1 : 4);
                return (
                    <BambuColorPicker
                        key={p.id}
                        label={p.name}
                        color={val}
                        extruder={extVal}
                        onChangeColor={(newCol) => handleDynamicParamChange(p.id, newCol)}
                        onChangeExtruder={(newExt) => handleDynamicParamChange(extField, newExt)}
                    />
                );
            case 'select':
                return (
                    <div key={p.id} className="space-y-1">
                        <label className="text-sm text-neutral-400">{p.name}</label>
                        <select
                            value={val}
                            onChange={e => handleDynamicParamChange(p.id, e.target.value)}
                            className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                        >
                            {p.options?.map((opt: any) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                );
            case 'boolean':
                return (
                    <div key={p.id} className="space-y-2 pt-2 pb-1">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex-shrink-0 flex items-center justify-center mt-0.5">
                                <input
                                    type="checkbox"
                                    checked={Boolean(val)}
                                    onChange={e => handleDynamicParamChange(p.id, e.target.checked)}
                                    className="w-5 h-5 rounded border-neutral-600 bg-neutral-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-neutral-900 transition-colors cursor-pointer appearance-none checked:bg-emerald-500 checked:border-emerald-500"
                                />
                                {val && (
                                    <svg className="w-3.5 h-3.5 absolute text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-neutral-200 group-hover:text-emerald-400 transition-colors">{p.name}</span>
                                {p.description && <span className="text-xs text-neutral-500">{p.description}</span>}
                            </div>
                        </label>
                    </div>
                );
            default:
                return null;
        }
    };

    const mainSections = modelConfig?.sections?.filter((s: any) => s.name !== 'Cores') ?? [];
    const colorsSection = modelConfig?.sections?.find((s: any) => s.name === 'Cores');

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

    return ("""

if "    return (" not in ponteira_text:
    print("Could not find return")
ponteira_text = ponteira_text.replace("    return (", helpers_new, 1)

# 4. Replace UI params list
ui_pattern = re.compile(r'\{\/\* Parâmetros Dinâmicos \(Server-Driven\) \*\/\}.*?\{\/\* Generate Button Fixed Bottom \*\/\}', re.DOTALL)

ui_new = """{/* Parâmetros Principais e Seções (Server-Driven) */}
                                {modelConfig?.parameters && (
                                    <div className="space-y-4 pb-1">
                                        {modelConfig.parameters.map(renderParam)}
                                    </div>
                                )}
                                {mainSections.map(renderAccordionSection)}
                                {colorsSection && renderAccordionSection(colorsSection)}
                            </div>

                        </div>
                    </div>

                    {/* Generate Button Fixed Bottom */}"""

ponteira_text = ui_pattern.sub(ui_new, ponteira_text)

# 5. Fix Viewer3D
viewer_old = """                            <Viewer3D
                                carimbBaseUrl={carimbBaseUrl}
                                carimbArteUrl={carimbArteUrl}
                                cortadorUrl={cortadorUrl}
                                isGenerating={isGenerating}
                                artColor={artColor}
                                modelColor={modelColor}
                            />"""

viewer_new = """                            <Viewer3D
                                carimbBaseUrl={carimbBaseUrl}
                                carimbArteUrl={carimbArteUrl}
                                cortadorUrl={cortadorUrl}
                                isGenerating={isGenerating}
                                artColor={(dynamicParams['letters_color'] as string) ?? '#FFFFFF'}
                                modelColor={(dynamicParams['base_color'] as string) ?? '#1B40D1'}
                            />"""

ponteira_text = ponteira_text.replace(viewer_old, viewer_new)

with open(r'c:\Users\IFSUL\Documents\dev\palavras-3d\trecoletes-3d\frontend\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(part1 + ponteira_text + part3)
print("SUCCESS!")
