FROM node:10-alpine

WORKDIR /app

COPY package.json /app

ENV NODE_ENV=production
RUN npm install

COPY . /app

EXPOSE 3000
CMD [ "npm", "run", "prod" ]