FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
    curl \
    git 

RUN curl -O https://nodejs.org/download/release/v10.15.2/node-v10.15.2-linux-x64.tar.gz

RUN tar xzf node-v10.15.2-linux-x64.tar.gz

ENV PATH="/node-v10.15.2-linux-x64/bin:${PATH}"

RUN curl -L https://www.npmjs.com/install.sh | sh

RUN node -v

RUN npm -v

RUN npm install webpack -g

RUN npm install webpack-cli -g

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .