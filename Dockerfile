FROM mhart/alpine-node

WORKDIR /usr/app

COPY package.json .
RUN npm install --production

COPY ./src/ .