
FROM node:19-alpine as development

RUN  apk update apk add g++ make py3-pip

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

COPY --chown=node:node . .

USER node

CMD ["yarn", "dev"]   


FROM node:19-alpine as build

RUN  apk update apk add g++ make py3-pip

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

COPY --chown=node:node . .

RUN yarn build

FROM node:19-alpine as production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/output ./

CMD ["node","server.js"]