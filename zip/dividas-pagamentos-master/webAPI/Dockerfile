#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["dividas-pagamentos.csproj", "webAPI/"]
RUN dotnet restore "webAPI/dividas-pagamentos.csproj"
COPY . .
WORKDIR /app
RUN dotnet build "dividas-pagamentos.csproj" -c Release -o /app/build



FROM build AS publish


FROM base AS final
WORKDIR /app

RUN apt-get update && apt-get install -y \
    curl \
    git 

RUN curl -O https://nodejs.org/download/release/v10.15.2/node-v10.15.2-linux-x64.tar.gz

RUN tar xzf node-v10.15.2-linux-x64.tar.gz

ENV PATH="/node-v10.15.2-linux-x64/bin:${PATH}"

RUN curl -L https://www.npmjs.com/install.sh | sh
# RUN dotnet publish "dividas-pagamentos.csproj" -c Release -o /app/publish


# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "dividas-pagamentos.dll"]
