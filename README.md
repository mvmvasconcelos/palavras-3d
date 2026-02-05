# Palavras 3D

Este projeto é um gerador de modelos 3D de palavras personalizadas via web.

## Tecnologias
- **Manifold-3D**: Para geometria sólida robusta e operações booleanas rápidas no navegador (via WebAssembly).
- **Three.js**: Para visualização e interação 3D.
- **Opentype.js**: Para leitura e conversão de fontes TTF.
- **HTML/JS (Vanilla)**: Interface simples e leve, sem dependência de backend Python.

## Objetivo
Permitir que o usuário digite um texto, configure parâmetros (tamanho, altura, base) e baixe um arquivo `.stl` pronto para impressão 3D, tudo rodando localmente no navegador.