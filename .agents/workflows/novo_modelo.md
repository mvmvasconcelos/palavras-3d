---
description: Como criar a estrutura completa para um novo modelo 3D no projeto
---

Sempre que o usuário solicitar "Crie um novo modelo", siga os passos abaixo para garantir que o modelo seja gerado corretamente no novo sistema (React no Frontend + FastAPI/OpenSCAD no Backend via Docker):

1.  **Criar o Diretório do Modelo no Backend:**
    Crie a pasta do modelo em `trecoletes-3d/backend/models/<id_do_modelo>`.
    
2.  **Criar Arquivo config.json:**
    Crie o arquivo `trecoletes-3d/backend/models/<id_do_modelo>/config.json`.
    Preencha com dados básicos (id, output_format, parameters, features). Este arquivo serve para definir metadados e defaults. Pode ser baseado num modelo existente (ex: `name_topper` ou `cortador_cookie`).
    
3.  **Criar Arquivo model.scad:**
    Crie o arquivo `trecoletes-3d/backend/models/<id_do_modelo>/model.scad`.
    Insira a geometria base (parametrizada com variáveis). Lembre que a porta de entrada para SVGs agora costuma utilizar `linhas.svg` como hardcoded import onde o backend faz o pré-processamento.
    
4.  **Criar e Integrar o Componente no Frontend:**
    Edite o arquivo `trecoletes-3d/frontend/src/App.tsx` (ou arquivo equivalente) para:
    *   Criar um **novo Componente React** (ex: `function MeuModeloGenerator()`) contendo a lógica de interface apropriada (inputs de texto, de SVG, uploaders) e o `Viewer3D`. O componente de gerador fará requisições `POST` para `http://localhost:8000/api/generate/<id_do_modelo>` e também `GET` para `/api/models/<id_do_modelo>/config`.
    *   Adicionar um **Card/Link na `Vitrine`** apontando para `/gerador/<id_do_modelo>`.
    *   Registrar a **Nova Rota** dentro do `BrowserRouter` / `Routes`: `<Route path="/gerador/<id_do_modelo>" element={<MeuModeloGenerator />} />`.

5.  **Aviso ao Usuário:**
    Comunique que a estrutura inicial no Backend e o roteamento no Frontend foram criados, solicitando revisão ou testes com base nos padrões adotados pelo sistema.
