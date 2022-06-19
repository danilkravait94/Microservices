FROM node:14.16-alpine as server_builder
EXPOSE 8080
COPY services/service1/src/service1.js .
COPY services/kafka-service/src/package.json ./
COPY services/kafka-service/src/package-lock.json ./
RUN npm install
CMD [ "node", "service1.js" ]