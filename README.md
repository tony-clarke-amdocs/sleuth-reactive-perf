### Purpose
To demonstrate sleuth reactive overhead.

### How
Deply Spring Cloud Gateway with and without Sleuth which will route requests to a spring boot microservice. Gatling will drive the load, measure the latency and plot the graphs. All componets are running on the same host. Based on Spring Boot 2.1.6 and Spring Cloud 2.1.2.

By default the test will run 6 times. 3 times with Sleuth enabled and 3 times with Sleuth disabled. 

### Results
The test has been run on three sample platforms; a windows laptop, macbook pro laptop and a Linux server. In each case adding Sleuth seems to show a significant degradation in the response time.

__Summary__
| Platform   |      Without Sleuth      |  With Sleuth |
|----------|:-------------:|:------:|
| Windows |   41 |  83 | 
| Mac | 3|  29  |
| Linux | 6 |11 |

*Note*: The above summary takes the middle run from the test. Full details can be found in results/.

### To Run
From root directory ./test.sh 
The results can be viewed in gatlingtest/target/gatling/
