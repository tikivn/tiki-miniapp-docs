FROM node:12.14.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

COPY ./ /app/
RUN yarn run build

FROM nginx:1.18.0-alpine

COPY --from=builder /app/_site/ /usr/share/nginx/html/
COPY --from=builder /app/deploy/default.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80
