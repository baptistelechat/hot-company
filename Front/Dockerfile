# pull official base image
FROM node:13.12.0-alpine

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN npm install --silent
# add app
COPY . ./

RUN npm i -g serve
RUN npm run build

WORKDIR /build

# start app
CMD ["serve", "-l", "80"]
