#!/bin/sh

docker-compose up --build -d

if [ $(uname) == "Darwin" ]; then
    open http://localhost/travel-front/
    sleep 10
    open http://localhost/travel-back/prometheus
    open "http://localhost:3000/"
fi
