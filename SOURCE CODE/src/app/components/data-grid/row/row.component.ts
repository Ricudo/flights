import { Component, Input } from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";
import {Modal} from "../../../models/modal.interface";

@Component({
    selector: "data-row",
    templateUrl: "./row.component.html",
    styleUrls: ["./row.component.scss"]
})
export class RowComponent {
    @Input() public row!: IFlight;
    isModal = false;
    modalObj: Modal = {
      regId: '',
      date: new Date(),
      flight: ''
    };

  openModal(regId: string, date: Date, flight: string) {
    this.modalObj.regId = regId;
    this.modalObj.date = date;
    this.modalObj.flight = flight;
    this.isModal = !this.isModal;
  }

  onSave(event: string) {
    this.row.registration = event;
    this.isModal = !this.isModal;
  }
}
