#!/bin/bash

docker build -t pubgolf-ui .

docker run -d -p 3000:3000 --name pubgolf-ui pubgolf-ui
