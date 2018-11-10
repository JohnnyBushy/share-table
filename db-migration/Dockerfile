FROM node:8.12.0-alpine

COPY . /usr/src

RUN cd /usr/src && yarn

WORKDIR /usr/src

CMD [ "yarn", "run", "migrate", "up" ]