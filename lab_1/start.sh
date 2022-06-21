minikube delete
minikube start --driver=hyperv

./docker_build.sh

kubectl apply -f k8s --recursive

minikube addons enable ingress
