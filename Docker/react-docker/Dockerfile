FROM ubuntu

RUN apt-get update && apt-get install -y \
    curl \
    git 

RUN curl -O https://nodejs.org/download/release/v10.15.2/node-v10.15.2-linux-x64.tar.gz

RUN tar xzf node-v10.15.2-linux-x64.tar.gz

ENV PATH="/node-v10.15.2-linux-x64/bin:${PATH}"

RUN curl -L https://www.npmjs.com/install.sh | sh

RUN npm install create-react-app -g

RUN create-react-app app

WORKDIR /app

RUN npm start
# docker run --rm -v ~/Desktop/codes/react-docker/src/:/app/src -it reactdocker:latest 


# docker run --rm -v ~/Desktop/codes/react-docker/src/:/app/src -it -p 3000:3000 reactdocker:latest