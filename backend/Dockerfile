# syntax=docker/dockerfile:1.4
FROM node:lts-buster-slim AS development
# Create app directory
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN yarn install
COPY . /usr/src/app
EXPOSE 3000
