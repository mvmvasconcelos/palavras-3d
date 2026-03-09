FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies at BUILD time.
# The docker-compose anonymous volume (/app/node_modules) will
# shadow the host bind-mount, keeping node_modules inside the image layer.
COPY package.json package-lock.json* ./
RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
