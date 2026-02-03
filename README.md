Este é um projeto para gerar "enfeites com nome" no formato STL para impressão 3D. As peças são geradas a partir de um texto inserido pelo usuário e podem ser personalizadas com diferentes fontes, tamanhos e estilos.

# Pré-requisitos

1. **Python 3.x** instalado.
2. **OpenSCAD** instalado (Necessário para gerar o modelo 3D).
   - O projeto espera que esteja em: `C:\Program Files\OpenSCAD\openscad.exe`
3. **Fontes**: Instale as seguintes fontes no seu sistema para que o 3D funcione corretamente:
   - Comic Neue, Fredoka One, Chewy, Bangers, Lobster, Patrick Hand, Righteous, Russo One.

# Instalação e Execução

### Pré-requisitos
1.  **Python 3.10+** instalado.
2.  **OpenSCAD** instalado (Necessário para gerar o modelo 3D).
    - O projeto espera que esteja em: `C:\Program Files\OpenSCAD\openscad.exe`
3.  **Fontes**: Ao usar fontes padrão, certifique-se que estão instaladas. Para fontes personalizadas, basta fazer o upload na interface.

### Configuração do Ambiente (Recomendado)

Para manter as dependências organizadas e não poluir seu Windows, use um ambiente virtual:

```powershell
# 1. Criar o ambiente virtual (apenas na primeira vez)
python -m venv .venv

# 2. Ativar o ambiente
.\.venv\Scripts\Activate.ps1

# 3. Instalar dependências
pip install -r requirements.txt
```

### Executando o Projeto

Com o ambiente ativado:

```powershell
python web/app.py
```

4.  Acesse o site: [http://localhost:5000](http://localhost:5000)

# Tecnologias

- **Backend**: Python, Flask
- **Gerador 3D**: OpenSCAD
- **Frontend**: HTML5, CSS3, JavaScript
- **Visualizador 3D**: Three.js