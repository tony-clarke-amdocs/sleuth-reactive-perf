### Purpose
To demonstrate sleuth reactive overhead.

### How
Deply Spring Cloud Gateway with and without Sleuth which will route requests to a spring boot microservice. Gatling will drive the load, measure the latency and plot the graphs. All componets are running on the same host. Based on Spring Boot 2.4.0 and Spring Cloud 2020.0.0

By default the test will run 6 times. 3 times with Sleuth enabled and 3 times with Sleuth disabled. 

### Results
The test has been run on three sample platforms; a windows laptop, macbook pro laptop and a Linux server. Sleuth 3.x.x seems to show a significant improvement over Sleuth 2.x.x

__Summary__

| Platform   | Without Sleuth | With Sleuth - Manual | With Sleuth - On Each Operation|
|----------|:-------------:|:------:|----|
| Windows |  6 |  NA | 10 |
| Mac | 3|  4  | 5 |
| Linux | NA | NA | NA |

*Note*: The above summary takes the last run from the test. Full details can be found in results/.

### To Run
From root directory ./test.sh 
The results can be viewed in gatlingtest/target/gatling/
