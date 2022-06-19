eval $(minikube docker-env)
minikube addons enable ingress

docker build -t kafka-service:0.3.0 -f services/kafka-service/Dockerfile .
docker build -t service1:0.3.0 -f services/service1/Dockerfile .
docker build -t service2:0.3.0 -f services/service2/Dockerfile .
