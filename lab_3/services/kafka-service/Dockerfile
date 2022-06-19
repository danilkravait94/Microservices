FROM node:14.16-alpine
EXPOSE 8080
COPY services/kafka-service/src/kafka-service.js ./
COPY services/kafka-service/src/package.json ./
COPY services/kafka-service/src/package-lock.json ./
RUN npm install
CMD [ "npm", "start" ]