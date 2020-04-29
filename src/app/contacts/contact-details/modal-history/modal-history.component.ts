import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Services } from './../../../services';

@Component({
  selector: 'app-modal-history',
  templateUrl: './modal-history.component.html',
  styleUrls: ['./modal-history.component.css']
})
export class ModalHistoryComponent implements OnInit {

  @Input()data: Object[];

  constructor(
    public activeModal: NgbActiveModal,
    public services: Services,
  ) { 
    
  }

  ngOnInit() {
  }

}
