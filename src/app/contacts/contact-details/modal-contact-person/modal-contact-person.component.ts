import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Services } from './../../../services';

@Component({
  selector: 'app-modal-contact-person',
  templateUrl: './modal-contact-person.component.html',
  styleUrls: ['./modal-contact-person.component.css']
})
export class ModalContactPersonComponent implements OnInit {

  @Input()data: Object[];
  
  communicationData : object[];

  constructor(
    public activeModal: NgbActiveModal,
    public services: Services,
  ) { 
    
    this.communicationData = [{
      "primary_key": 6191,
      "contact_pk": 460,
      "contact_person_pk": 0,
      "uplink": "aa@dd.gr",
      "type": 3,
      "description": "",
      "phone_match_number": "",
      "position": 0,
      "is_newsletter": false,
      "is_invoice": false,
      "$$hashKey": "object:198"
  }, {
      "primary_key": 6192,
      "contact_pk": 460,
      "contact_person_pk": 0,
      "uplink": "www.ffg.gr",
      "type": 4,
      "description": "",
      "phone_match_number": "",
      "position": 0,
      "is_newsletter": false,
      "is_invoice": false,
      "$$hashKey": "object:201"
  }, {
      "primary_key": 6193,
      "contact_pk": 460,
      "contact_person_pk": 0,
      "uplink": "1234567",
      "type": 0,
      "description": "",
      "phone_match_number": "1234567",
      "position": 0,
      "is_newsletter": false,
      "is_invoice": false,
      "$$hashKey": "object:191"
  }, {
      "primary_key": 2933,
      "contact_pk": 460,
      "contact_person_pk": 0,
      "uplink": "0721 96 99",
      "type": 0,
      "description": "",
      "phone_match_number": "07219699",
      "position": 0,
      "is_newsletter": false,
      "is_invoice": false,
      "$$hashKey": "object:192"
  }]

  services.common.communicationDataCp = this.communicationData;

  }


  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

}
