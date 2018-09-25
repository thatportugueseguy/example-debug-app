FROM node:8-alpine

WORKDIR /app

COPY . /app

ENV NODE_ENV=production
RUN yarn

EXPOSE 3000
CMD [ "yarn", "prod" ]