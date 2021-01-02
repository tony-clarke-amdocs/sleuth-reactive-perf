#!/bin/bash

mvn clean install

cd restapp && mvn spring-boot:run &
cd apigw && mvn spring-boot:run -Dspring-boot.run.profiles=nosleuth &
sleep 20
cd gatlingtest && mvn gatling:test -Dtitle=nosleuth -Dnusers=2000
curl -X POST http://localhost:8080/actuator/shutdown
curl -X POST http://localhost:9090/actuator/shutdown
cd ..
sleep 20

cd restapp && mvn spring-boot:run &
cd apigw && mvn spring-boot:run -Dspring-boot.run.profiles=withsleuth &
sleep 20
cd gatlingtest && mvn gatling:test -Dtitle=withsleuth -Dnusers=2000
curl -X POST http://localhost:8080/actuator/shutdown 
curl -X POST http://localhost:9090/actuator/shutdown
