# Docker Build and Run Instructions

To build and run the Docker container for this application, follow these steps:

1. Build the Docker image:
```bash
docker build -t myapp .
```

2. Run the container:
```bash
docker run -p 8080:5000 myapp
```
```bash
docker compose up -d
```

This will:
- Build an image named 'myapp' from the Dockerfile
- Run a container from that image
- Map port 5000 from the container to port 5000 on your host machine

The application will be accessible at http://localhost:8080 once the container is running.


docker container prune -f

docker rm -f $(docker ps -aq)

To delete all Docker images, use the following command:
docker rmi -f $(docker images -aq)

If you want to remove only dangling and unused images
docker image prune -a -f