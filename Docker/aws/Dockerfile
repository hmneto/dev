FROM ubuntu

WORKDIR /app

RUN apt update && apt install -y \
    curl \
    unzip


RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

RUN unzip awscliv2.zip

RUN ./aws/install

RUN  /usr/local/bin/aws --version

RUN cat /proc/version
