FROM node:alpine
WORKDIR '/app'
COPY ./package*.json ./
RUN npm install
COPY . .
RUN chmod -R 777 ./
CMD ["npm", "run", "start"]
