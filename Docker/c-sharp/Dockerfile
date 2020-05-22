FROM ubuntu

RUN apt update && apt install -y \
    wget
RUN wget https://packages.microsoft.com/config/ubuntu/19.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
RUN dpkg -i packages-microsoft-prod.deb

RUN apt update && apt install -y \
    apt-transport-https
RUN apt update && apt install -y \
    dotnet-sdk-3.1

WORKDIR /app

COPY . .