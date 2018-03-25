#!/bin/sh

docker-compose up --build -d

if [ $(uname) == "Darwin" ]; then
    open http://localhost/travel-front/
    sleep 10
    open "http://localhost:3000/dashboard/db/delorean?orgId=1&refresh=1s&from=now-5m&to=now"
fi
