FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

FROM base as dev

ENV NODE_PATH=./build

RUN npm run build
