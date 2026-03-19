import re
import sys

filepath = r"c:\Users\IFSUL\Documents\dev\palavras-3d\trecoletes-3d\frontend\src\App.tsx"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Duplicar o Generator para PonteiraLapisSvgGenerator
# Vamos pegar a string que começa em "function Generator() {" e termina antes de "function TestHolesVertical() {"
# Como Generator pode não estar imediatamente antes de TestHolesVertical, o regex seguro:
gen_match = re.search(r"function Generator\(\) \{.*?(?=function (?:TestHolesVertical|Vitrine|App|NameTopper)\(\))", content, re.DOTALL)
if not gen_match:
    print("Failed to find Generator")
    sys.exit(1)

generator_code = gen_match.group(0)

# Fazer replaces dentro do generator_code para convertê-lo no novo
new_generator = generator_code.replace("function Generator()", "function PonteiraLapisSvgGenerator()")
new_generator = new_generator.replace("cortador_cookie", "ponteira_lapis_svg")
new_generator = new_generator.replace("Cortador de Biscoito", "Ponteira Lapis SVG")

# 2. Inserir a nova função logo depois do Generator original
content = content.replace(generator_code, generator_code + "\n\n" + new_generator)

# 3. Adicionar rota
# <Route path="/gerador/cortador_cookie" element={<Generator />} />
route_match = re.search(r'<Route path="/gerador/cortador_cookie" element=\{<Generator />\} />', content)
if route_match:
    new_route = '<Route path="/gerador/cortador_cookie" element={<Generator />} />\n                <Route path="/gerador/ponteira_lapis_svg" element={<PonteiraLapisSvgGenerator />} />'
    content = content.replace(route_match.group(0), new_route)
else:
    print("Failed to find Route")
    sys.exit(1)

# 4. Adicionar Card na Vitrine
new_card = """
                    <Link to="/gerador/ponteira_lapis_svg" className="group bg-neutral-950 border border-neutral-800 p-8 rounded-2xl hover:border-blue-500 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] block">
                        <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors mb-3">Ponteira Lápis SVG</h2>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Gere ponteiras de lápis personalizadas a partir de arquivos SVG em 3D.
                        </p>
                    </Link>
"""
# A Vitrine termina com algo como:
#                     </Link>
#                 </div>
#             </main>
vitrine_end = r"                    </Link>\s*</div>\s*</main>"
vitrine_match = re.search(vitrine_end, content)
if vitrine_match:
    content = content[:vitrine_match.start()] + new_card + content[vitrine_match.start():]
else:
    print("Failed to find Vitrine End")
    # Will try another heurist:
    if "Vitrine de Produtos</h1>" in content:
        # Just insert before the closing div of the grid
        print("Fallback for vitrine")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("App.tsx modified successfully")
