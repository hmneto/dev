# FROM node:alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install \
#     yarn 

# RUN yarn install

# COPY . .

# CMD ["yarn","start"]


FROM node:latest
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@0.9.5 -g
# add app
ADD . .
# start app
CMD ["npm", "start"]