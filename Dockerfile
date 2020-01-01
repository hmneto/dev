FROM node:argon
WORKDIR /src
RUN npm install -g supervisor
CMD [ "supervisor","index.js" ]