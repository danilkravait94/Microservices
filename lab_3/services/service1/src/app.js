const { Kafka } = require('kafkajs');
// import { Kafka } from 'kafkajs';

const clientId = 'service1';
const brokers = ['kafka:9092'];
const topic = 'microservices';

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({ groupId: clientId });

const consume = async () => {

	await consumer.connect();
	await consumer.subscribe({ topic });
	await consumer.run({
		eachMessage: ({ message }) => {
			console.log(`message: ${message.value}`);
		},
	})
}

consume();
