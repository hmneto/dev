FROM node:alpine
WORKDIR /app
COPY packeage*.json .
RUN npm install
EXPOSE 80
CMD ["npm","start"]