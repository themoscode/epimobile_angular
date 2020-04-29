import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-select-dates',
  templateUrl: './modal-select-dates.component.html',
  styleUrls: ['./modal-select-dates.component.css']
})
export class ModalSelectDatesComponent implements OnInit {

  constructor(
    public activeModal : NgbActiveModal
  ) { }

  closeModal(){
    this.activeModal.close('Modal Closed')
  }

  ngOnInit() {
  }

}
