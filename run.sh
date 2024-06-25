#!/bin/bash

docker build -t pubgolf-ui .

docker run -d -p 3001:3000 --name pubgolf pubgolf-ui
