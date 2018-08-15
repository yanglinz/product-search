FROM node:8.9.1

RUN mkdir -p /home/app
COPY package.json /home/app
COPY yarn.lock /home/app
WORKDIR /home/app

RUN yarn install
