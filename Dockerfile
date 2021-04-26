FROM node:14.16.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --production

COPY ./ /app/
RUN yarn run build

ENTRYPOINT ["/bin/sh", "-c", "yarn run serve --port 80 --host 0.0.0.0"]

EXPOSE 80
