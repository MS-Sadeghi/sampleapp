# Getting Started

## Docker CLI

1- manage containers and images

```bash
docker ps --all
docker images

docker stop sampleapp
docker rm sampleapp
docker rmi sampleappimage
```

2- create image and prepear container for backend

```bash
docker build -t sampleappimage .
docker run  -it --env-file .env -p 5000:5000 --name sampleapp sampleappimage
docker save -o C:\Deploy\sampleapp.tar sampleappimage
```

3- create image and prepear container for frontend

```bash
docker build -t todolistimage .
docker run  -it --env-file .env -p 5000:5000 --name todolist todolistimage
docker save -o C:\Deploy\todolist.tar todolistimage
```

3- load image from local host and run conatiner

```bash
docker load -i /root/dev/sampleapp/sampleapp.tar

docker run --network br0 --env-file /root/dev/sampleapp/.env -v sampleappData:/usr/src/app/assets -v sampleappLog:/usr/src/app/logs  --user limittedUser -d --name danemirestserver -p 127.0.0.1:4200:4200  danemi_app
```

- load image from docker hub and run conatiner

```bash
docker pull masoudsadeghi/sampleappimage
docker run --network br0 --env-file /root/dev/sampleapp/.env -v sampleappData:/usr/src/app/assets -v sampleappLog:/usr/src/app/logs  --user limittedUser -d --name apiServer2  -p 127.0.0.1:5000:4200  masoudsadeghi/sampleappimage
```

- change containers props

```bash
docker update --restart=always <Container-ID>

sudo service docker stop
sudo service docker start
```

## Volumes

- create volumes

```bash
docker volume ls
docker volume create --name apiserverdata
docker volume create --name apiserverlog
docker volume create --name nextserverdata
docker volume create --name nextserverlog
docker volume create --name mongodbVolume
docker volume create --name sqlvolume
```

- inspect volume data

```bash
docker volume inspect apiserverdata
```

## Networks

- create networks

```bash
docker network create --driver=bridge --subnet=172.28.0.0/16 --ip-range=172.28.5.0/24 --gateway=172.28.5.254 br0
docker network create --driver=bridge --subnet=172.29.0.0/16 --ip-range=172.29.5.0/24 --gateway=172.29.5.254 br1
```
