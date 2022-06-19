const { Kafka } = require('kafkajs');

const clientId = 'kafka-service';
const brokers = ['kafka:9092'];
const topic = 'microservices';

const kafka = new Kafka({ clientId, ssl: true, brokers });
const producer = kafka.producer();

const produce = async () => {

	await producer.connect();
	let index = 0;

	setInterval(async () => {
		try {
			await producer.send({
				topic,
				messages: [
					{
						key: String(i),
						value: 'this is message ' + index,
					},
				],
			});

			console.log('writes: ', index);
			index++;

		} catch (error) {
			console.error('could not write message ' + error);
		}
	}, 1000);
};


produce();
