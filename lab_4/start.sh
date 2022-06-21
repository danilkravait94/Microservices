minikube delete
minikube start --driver=hyperv

./docker_build.sh

kubectl apply -f k8s/zookeeper
kubectl apply -f k8s/kafka
kubectl apply -f k8s/storage
kubectl apply -f k8s/postgres

kubectl create namespace kube-system
kubectl create namespace logging

kubectl create -f k8s/elasticsearch/elastic.yaml -n logging
kubectl create -f k8s/kibana/kibana.yaml -n logging

kubectl create -f k8s/fluentd/fluentd-rbac.yaml
kubectl create -f k8s/fluentd/fluentd-daemonset.yaml
kubectl apply -f k8s/service1
kubectl apply -f k8s/service2
kubectl apply -f k8s/kafka-service

kubectl apply -f k8s/ingress.yaml

minikube addons enable metrics-server

kubectl create namespace monitoring

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm install --namespace monitoring prometheus prometheus-community/kube-prometheus-stack

# kubectl config set-context --current --namespace=monitoring

kubectl apply -f k8s/grafana
