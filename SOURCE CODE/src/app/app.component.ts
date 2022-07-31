import {Component, OnInit} from "@angular/core";

import {IFlight} from "src/app/models/flight.interface";
import {HttpService} from "./services/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public data: IFlight[] = [];
  myData: object[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getFlights().subscribe(data => {
        let csvToRowArray = data.split("\r\n");
        let keys: string[] = csvToRowArray[0]
          .toLowerCase()
          .replace(/[^a-z,]/gi, '')
          .split(',');
        for (let i = 1; i < csvToRowArray.length - 1; i++) {
          let row: string[] = csvToRowArray[i].split(",");
          let oneFlight: { [k: string]: string } = {};
          for (let x = 0; x < keys.length; x++) {
            oneFlight[keys[x]] = row[x];
          }
          this.myData.push(oneFlight)
          let {flightnumber, datetime, origindestination, registration} = oneFlight;
          let currentFlight: IFlight = {
            flightNumber: flightnumber,
            scheduledDate: new Date(+datetime),
            originDestination: origindestination,
            registration: registration
          };
          this.data.push(currentFlight)
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
