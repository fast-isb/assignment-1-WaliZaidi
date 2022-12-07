FROM node:current-alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 3000

CMD {"node", "start"}