ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY . ./

RUN npm install -g pm2
RUN npm install
RUN npm install --include=optional sharp
RUN npm install --os=linux --cpu=x64 sharp

RUN npm run build

COPY . .

USER node

CMD ["pm2-runtime", "ecosystem.config.json"]
