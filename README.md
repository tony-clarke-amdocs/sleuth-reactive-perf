### Purpose
To demonstrate sleuth reactive overhead.

### How
Deply Spring Cloud Gateway with and without Sleuth which will route requests to a spring boot microservice. Gatling will drive the load, measure the latency and plot the graphs. All componets are running on the same host. Based on Spring Boot 2.4.3 and Spring Cloud 2020.0.0 and Sleuth 3.0.2-SNAPSHOT


### Results

__Summary__

| Platform   | Without Sleuth | With Sleuth - Decorate Queues |
|----------|:-------------:|:------:|
| Mac 1000 users| 3|  3|

### To Run
From root directory ./test.sh 
The results can be viewed in gatlingtest/target/gatling/
