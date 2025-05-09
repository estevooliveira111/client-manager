# Imagem base
FROM python:3.11-slim

# Diretório de trabalho
WORKDIR /app

# Copia arquivos
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app ./app

# Porta exposta
EXPOSE 8000

# Comando para rodar o servidor
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
