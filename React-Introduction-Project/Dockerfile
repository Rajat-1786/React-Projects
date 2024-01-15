#Install base image for node-18.17.0
FROM node:18-alpine

RUN mkdir /apps

WORKDIR /apps

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm" "start"]
