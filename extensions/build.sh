#!/bin/bash

sleep 15s

cd ./geocoding && make
cd ..

cd ./greet && make
cd ..

chmod -R a+rwx ./dist