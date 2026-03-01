---
description: Como criar a estrutura completa para um novo modelo 3D no projeto
---

Sempre que o usuário solicitar "Crie um novo modelo", execute os passos abaixo para garantir que o modelo apareça na Galeria (Home), possua uma página de Vitrine individual e uma página de Gerador correspondente. A aplicação varre a pasta `models/` automaticamente procurando o arquivo `config.json`.

// turbo-all
1.  **Criar o Diretório do Modelo:**
    Crie uma pasta dentro de `models/` usando o ID em *snake_case* do novo modelo.
    *Exemplo: `mkdir models/id_do_modelo`*

2.  **Criar Arquivo config.json Base:**
    Crie o arquivo `models/<id_do_modelo>/config.json`.
    Preencha com dados básicos necessários (id, name, description, thumbnail padrão, e categories vazias ou básicas) se não forem repassados requisitos. Use caminho local para a imagem: `/static/img/<id_do_modelo>_thumb.png`. Não esqueça da feature `preview2d` se for aplicar texto ou personalização em realtime.

3.  **Criar Arquivo model.scad Temporário:**
    Crie o arquivo `models/<id_do_modelo>/model.scad`.
    Insira apenas uma geometria muito simples (como `cube([10,10,10]);`) apenas para o back-end não retornar erro de leitura do aquivo ou SCAD compilado corrompido, e também permita validar o Front-end cego.

4.  **Aviso ao Usuário:**
    Após as criações acima o Front-end (Home, Vitrine e Editor) será automaticamente validado e abastecido com as rotas para o novo modelo. Avise o usuário e requisite a confirmação se ele quer trabalhar no SCAD ou na lógica de parâmetros HTML no painel de Customização.
