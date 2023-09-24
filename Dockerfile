FROM node:latest

WORKDIR /app

#Install app dependencies
COPY package*.json /app
RUN npm install

#Bundle app source 
COPY . /app
CMD ["node", "index.js"]
