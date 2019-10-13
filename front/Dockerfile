FROM node:8.9-alpine

RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "./"]

RUN npm install --production --silent
