FROM ubuntu

RUN apt update && apt install -y \
    wget
RUN wget https://packages.microsoft.com/config/ubuntu/19.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
RUN dpkg -i packages-microsoft-prod.deb

RUN apt-get update
RUN apt-get install apt-transport-https
RUN apt-get update
RUN apt-get install dotnet-sdk-3.1