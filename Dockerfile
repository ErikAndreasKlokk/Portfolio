FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE ${PORT}

WORKDIR /app

CMD [ "node", "build/index.js" ]