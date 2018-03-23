#!/bin/sh

docker-compose up --build -d

if [ $(uname) == "Darwin" ]; then
    open http://localhost/travel-front/
    sleep 3
    open "http://localhost:3000/dashboard/db/alien-dashboard?orgId=1&refresh=1s&from=now-5m&to=now"
fi
