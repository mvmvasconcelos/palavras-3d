# Ativa o ambiente virtual se existir
if (Test-Path ".venv\Scripts\Activate.ps1") {
    .venv\Scripts\Activate.ps1
} else {
    Write-Host "Aviso: Ambiente virtual (.venv) não encontrado na pasta raiz." -ForegroundColor Yellow
}

# Instala as dependências se o requirements.txt existir
if (Test-Path "requirements.txt") {
    Write-Host "Verificando dependências..." -ForegroundColor Cyan
    pip install -r requirements.txt
}

# Inicia o servidor Flask
Write-Host "Iniciando o servidor..." -ForegroundColor Green
python web\app.py
