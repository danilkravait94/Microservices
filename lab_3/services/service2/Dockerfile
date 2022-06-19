FROM node:14.16-alpine as server_builder
EXPOSE 8080
COPY services/service2/src/service2.js .
COPY services/kafka-service/src/package.json ./
COPY services/kafka-service/src/package-lock.json ./
RUN npm install
CMD [ "node", "service2.js" ]