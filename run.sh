#!/bin/bash

docker stop pubgolf-ui

docker rm pubgolf-ui

docker build -t pubgolf-ui .

docker run -d -p 3001:3000 --name pubgolf-ui pubgolf-ui
