#Install base image for node-18.17.0
FROM node:alpine3.18

RUN mkdir /apps

WORKDIR /apps

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm" "run" "dev"]
