FROM node:20-alpine

WORKDIR /app

# We don't copy package.json right away because the host will volume mount it.
# However, for an initial build, we need it. 
# We'll use a strategy where we just keep the container running for dev.
CMD ["sh", "-c", "npm install && npm run dev -- --host 0.0.0.0"]
