FROM node:8.9-alpine

RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && mv node_modules ./
