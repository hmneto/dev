FROM node:alpine

WORKDIR /app
COPY packege.json .
RUN npm install
COPY . . 
CMD ["node","index.js"]
