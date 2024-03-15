# Imagem oficial do NodeJS como base
FROM node:18

# Pasta de trabalho
WORKDIR /usr

# Copiar os arquivos package
COPY package*.json ./

# Instalação das dependências do projeto
RUN npm install 

# Copiar os demais arquivos
COPY . .

# Expor uma porta do conteiner
EXPOSE 5678

# Comando para iniciarlizar o aplicativo
CMD "node" "./server/server.js"