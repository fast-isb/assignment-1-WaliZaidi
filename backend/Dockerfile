FROM node:current-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 5000

CMD {"node", "index.js"}