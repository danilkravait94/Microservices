minikube delete
minikube start --driver=hyperv

./docker_build.sh

kubectl apply -f k8s/zookeeper
kubectl apply -f k8s/kafka
kubectl apply -f k8s/storage
kubectl apply -f k8s/postgres

kubectl apply -f k8s/service1
kubectl apply -f k8s/service2
kubectl apply -f k8s/kafka-service

kubectl apply -f k8s/ingress.yaml

