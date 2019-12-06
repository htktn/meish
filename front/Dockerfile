FROM node:8.9-alpine

RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "./"]

RUN npm install
# RUN npm install react-scripts@3.0.1 -g --silent
