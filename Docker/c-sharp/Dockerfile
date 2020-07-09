FROM ubuntu

RUN apt update && apt install -y \
    wget \
    curl
RUN wget https://packages.microsoft.com/config/ubuntu/19.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
RUN dpkg -i packages-microsoft-prod.deb

RUN apt update && apt install -y \
    apt-transport-https
RUN apt update && apt install -y \
    dotnet-sdk-3.1 \
    aspnetcore-runtime-3.1 \
    dotnet-runtime-3.1



RUN curl -O https://nodejs.org/download/release/v10.15.2/node-v10.15.2-linux-x64.tar.gz

RUN tar xzf node-v10.15.2-linux-x64.tar.gz

ENV PATH="/node-v10.15.2-linux-x64/bin:${PATH}"

RUN curl -L https://www.npmjs.com/install.sh | sh


WORKDIR /app

COPY . .

RUN dotnet new react -o my-new-app
# docker run --rm mcr.microsoft.com/dotnet/core/samples