#!/bin/sh

docker-compose up --build -d

if [ $(uname) == "Darwin" ]; then
    open http://localhost/travel-front/
    open http://localhost:9090/rules
    open http://localhost:9090/alerts
    open http://localhost:9093/#/alerts
    sleep 10
    open "http://localhost:3000/"
fi
