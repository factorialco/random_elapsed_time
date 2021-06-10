FROM node:14-alpine

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY index.js /app/
ENTRYPOINT ["/usr/local/bin/node", "/app/index.js"]
