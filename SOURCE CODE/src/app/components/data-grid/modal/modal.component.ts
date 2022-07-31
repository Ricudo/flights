import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Modal} from "../../../models/modal.interface";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalData!: Modal;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<string>();

  selectFlag = false;
  buttonFlag = false;
  inputValue = '';
  minInput = 2;
  registrationFull: string[] = [];
  registrationSuggest: string[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getRegistration().subscribe(data => {
        this.registrationFull = data.split("\r\n");
      },
      error => {
        console.log(error);
      }
    );
    this.inputValue = this.modalData.regId;
  }

  onInput(event: Event) {
    this.selectFlag = true;
    this.inputValue = (<HTMLInputElement>event.target).value;
    this.registrationSuggest =
      this.registrationFull.filter(p =>
        p.toLowerCase().includes(this.inputValue.toLowerCase()))
  }

}
