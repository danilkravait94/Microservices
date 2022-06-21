const { Kafka } = require('kafkajs');
const SimpleNodeLogger = require('simple-node-logger');
// import { Kafka } from 'kafkajs';

const clientId = 'service2';
const brokers = ['kafka:9092'];
const topic = 'microservices';

const opts = {
	timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
  };

const log = SimpleNodeLogger.createSimpleLogger(opts);

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({ groupId: clientId });

const consume = async () => {

	await consumer.connect();
	await consumer.subscribe({ topic });
	await consumer.run({
		eachMessage: ({ message }) => {
			log.info(`message: ${message.value}`);
		},
	})
}

consume();
