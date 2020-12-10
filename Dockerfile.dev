FROM node:12.14.0-alpine AS builder

WORKDIR /app

COPY . /app

RUN npm install --no-cache && \
    npm build

EXPOSE 7111

CMD ["npm","start"]
