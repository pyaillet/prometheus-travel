package fr.zenika.prometheus.delorean;

import java.util.Calendar;
import io.prometheus.client.spring.boot.EnablePrometheusEndpoint;
import io.prometheus.client.spring.boot.EnableSpringBootMetricsCollector;
import io.prometheus.client.spring.web.EnablePrometheusTiming;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.prometheus.client.*;
import io.prometheus.client.spring.web.PrometheusTimeMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@EnablePrometheusEndpoint
@EnableSpringBootMetricsCollector
@EnablePrometheusTiming
public class DeloreanApplication {
  public static void main(String[] args) {

      SpringApplication.run(DeloreanApplication.class, args);
  }

  @RestController
  static public class OrderController {

      static final Float SPEED_OF_TIME = new Float(88);
      static final Float INIT_URANIUM_STOCK = new Float(6);
      static final Float INIT_CURRENT_YEAR = 
          new Float(Calendar.getInstance().get(Calendar.YEAR));

      static final Counter consumed_uranium = Counter.build()
              .name("consumed_uranium").help("Consumed uranium.(kg)").register();

      static final Gauge uranium_quantity;

      static final Gauge speed = Gauge.build()
              .name("speed").help("Delorean Speed.").register();
      
      static final Gauge current_year;

      static {
          uranium_quantity = Gauge.build()
              .name("uranium_quantity").help("Available uranium.(kg)").register();
          uranium_quantity.set(INIT_URANIUM_STOCK);
          current_year = Gauge.build()
              .name("current_year").help("Delorean current year.").register();
          current_year.set(INIT_CURRENT_YEAR);
      }

      @RequestMapping(method = RequestMethod.POST, value = "/goToTime")
      @PrometheusTimeMethod(name = "time_to_travel", help = "Travel Duration")
      public ResponseEntity<Destination> goToTime(@RequestBody Destination destination) {
          //go to 88MPH
          while(speed.get() < SPEED_OF_TIME){
              try {
                  Thread.sleep(1000);
              } catch (InterruptedException e) {
              }
              speed.inc(4);


          }
          //uranium gauge modification
          consumed_uranium.inc(2);
          uranium_quantity.dec(2);
          //Set Current year
          current_year.set(Float.parseFloat(destination.getDestination_date().substring(0,4)));
          //brake!
          while(speed.get() > 0){
              try {
                  Thread.sleep(1000);
              } catch (InterruptedException e) {
              }
              speed.dec(8);
          }
          return new ResponseEntity<Destination>(destination, HttpStatus.OK);
      }

      @RequestMapping(method = RequestMethod.GET, value = "/fillUranium")
      public void fillUranium() {
          uranium_quantity.inc(10);
      }







      static public class Destination {
          private String destination_date;
          public Destination() {
          }
          public Destination(String destination_date) {
              this.destination_date = destination_date;
          }
          public String getDestination_date() {
              return destination_date;
          }

          public void setDestination_date(String destination_date) {
              this.destination_date = destination_date;
          }
      }
  }
}
