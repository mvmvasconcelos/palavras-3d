import os
import time
import subprocess
import zipfile
import hashlib
import json

CORE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(CORE_DIR)
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "web", "static", "generated")

OPENSCAD_PATH = r"C:\Program Files\OpenSCAD\openscad.exe"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def cleanup_old_files(max_age_hours=24):
    """Limpa arquivos que ficaram no cache mais velhos do que max_age_hours para não encher o HD eternamente."""
    if not os.path.exists(OUTPUT_DIR):
        return
    current_time = time.time()
    max_age_seconds = max_age_hours * 3600
    for filename in os.listdir(OUTPUT_DIR):
        filepath = os.path.join(OUTPUT_DIR, filename)
        if os.path.isfile(filepath):
            file_age = current_time - os.path.getmtime(filepath)
            if file_age > max_age_seconds:
                try:
                    os.remove(filepath)
                except Exception:
                    pass

def generate_model(scad_file_path, params_dict, font_include=None, parts=["all"]):
    """
    Engine genérica que recebe o SCAD, cria um script wrapper com as variáveis injetadas,
    e invoca o OpenSCAD.
    """
    
    # Invoca a lixeira para excluir arquivos cacheados passados das últimas 24 horas
    cleanup_old_files(max_age_hours=24)
    
    # Criamos um hash MD5 único determinístico para esse exato conjunto de parâmetros
    cache_string = json.dumps(params_dict, sort_keys=True) + str(font_include) + str(parts)
    model_hash = hashlib.md5(cache_string.encode('utf-8')).hexdigest()[:10]
    
    # Valida se os artefatos desse hash já foram gerados antes
    all_exist = True
    generated_files = {}
    
    for part in parts:
        filename = f"{part}_{model_hash}.stl"
        filepath = os.path.join(OUTPUT_DIR, filename)
        generated_files[part] = f"/static/generated/{filename}"
        if not os.path.exists(filepath):
            all_exist = False

    if "base" in parts and "letters" in parts:
        zip_filename = f"multicolor_{model_hash}.zip"
        zip_path = os.path.join(OUTPUT_DIR, zip_filename)
        generated_files["zip"] = f"/static/generated/{zip_filename}"
        if not os.path.exists(zip_path):
            all_exist = False
            
    if all_exist:
        print(f"Cache Hit! Retornando modelos locais pré-existentes para hash {model_hash}")
        # Simulamos um tempinho leve para não piscar a interface abruptamente
        time.sleep(0.5)
        return {"success": True, "files": generated_files}
        
    print(f"Cache Miss... Gerando modelo inédito com hash {model_hash}")
    def scad_str(s):
        sanitized = str(s).replace('"', '\\"')
        return f'"{sanitized}"'
    
    overrides = []
    
    # Blind Injection
    for key, value in params_dict.items():
        if isinstance(value, str):
            if value.startswith("[") and value.endswith("]"):
                # Presumed raw scad array
                overrides.append(f"{key} = {value};")
            else:
                overrides.append(f"{key} = {scad_str(value)};")
        elif isinstance(value, bool):
            overrides.append(f"{key} = {'true' if value else 'false'};")
        else:
            overrides.append(f"{key} = {value};")

    scad_file_escaped = scad_file_path.replace('\\', '/')
    include_font = f"use <{font_include}>;" if font_include else ""

    temp_scad_content = f"""
include <{scad_file_escaped}>;
{include_font}

// Overrides
{chr(10).join(overrides)}

"""
    temp_scad_path = os.path.join(OUTPUT_DIR, f"temp_{model_hash}.scad")
    # generated_files was built in the cache check above
    
    try:
        for part in parts:
            filename = f"{part}_{model_hash}.stl"
            filepath = os.path.join(OUTPUT_DIR, filename)

            # Injetamos o `part` nativamente no arquivo para escapar o Windows stripping quotes
            content_with_part = temp_scad_content + f'\npart = "{part}";'
            
            # Precisamos obrigatoriamente invocar o módulo principal para que o SCAD gere algo.
            # No name_topper, a função principal é igual ao ID do modelo (baseado no SCAD original).
            # Vamos usar uma abordagem genérica caso o `generate_model` não conheça a função principal,
            # Ele executa genericamente `name_topper();` ou `render_model()`.
            # AQUI é o segredo do Z-Fighting: No legacy, o scad já possuía a chamada comentada. 
            # Injetaremos ela aqui e O arquivo temp terá a chamada:
            content_with_part += "\nname_topper();\n"
            
            with open(temp_scad_path, 'w', encoding='utf-8') as f:
                f.write(content_with_part)
                
            cmd = [OPENSCAD_PATH, "-o", filepath, temp_scad_path]
            print(f"Generating part: {part} (Timeout 60s)")
            subprocess.run(cmd, check=True, capture_output=True, timeout=60)
            
            generated_files[part] = f"/static/generated/{filename}"
            
        if "base" in generated_files and "letters" in generated_files:
            zip_filename = f"multicolor_{model_hash}.zip"
            zip_path = os.path.join(OUTPUT_DIR, zip_filename)
            with zipfile.ZipFile(zip_path, 'w') as zipf:
                zipf.write(os.path.join(OUTPUT_DIR, f"base_{model_hash}.stl"), arcname="base.stl")
                zipf.write(os.path.join(OUTPUT_DIR, f"letters_{model_hash}.stl"), arcname="text.stl")
            generated_files["zip"] = f"/static/generated/{zip_filename}"
            
        return {"success": True, "files": generated_files}
        
    except subprocess.TimeoutExpired:
        return {"success": False, "error": "OpenSCAD generation timed out"}
    except subprocess.CalledProcessError as e:
        return {"success": False, "error": f"OpenSCAD failed! {e.stderr.decode('utf-8')}"}
    except Exception as e:
        return {"success": False, "error": str(e)}
    finally:
        if os.path.exists(temp_scad_path):
            os.remove(temp_scad_path)
