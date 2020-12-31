// scala imports
import io.gatling.core.Predef.details
import scala.concurrent.duration._

// gatling import
import io.gatling.core.Predef._
import io.gatling.http.Predef._

// java import
import java.util.{Calendar, Date}

class SanityNFTPlatform extends Simulation
{

  // nft run settings
  val title = System.getProperty("title")

  // base header fields
  val httpProtocol = http
    .baseUrl("http://localhost")
    .inferHtmlResources()
    .acceptHeader("application/json")
    .acceptEncodingHeader("gzip, deflate")
    .contentTypeHeader("application/json")
    .userAgentHeader("Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36")

  object TestSpringSleuth
  {
    // get headers operation
    val springCloudtestCall = exec(http(title)
      .get("http://localhost:9090/greeting?name=toto")
      .check(status.is(200)))
  }


  val TestSpringSleuthScenario = scenario(title).forever(pace(1 seconds).exec(TestSpringSleuth.springCloudtestCall ))

  val nUsers = Integer.parseInt(System.getProperty("nusers"))
  val nRampUsersPerSecond = 63
  val rampDuration: Int = nUsers / nRampUsersPerSecond
    
  // ramping users
  setUp(TestSpringSleuthScenario.inject(rampUsers(nUsers) during(rampDuration seconds)))
    .maxDuration(10 minutes).protocols(httpProtocol)
    .assertions(
      // expected all success
      global.successfulRequests.percent.is(100),
      details(title).responseTime.mean.lt(80)
    )
}
