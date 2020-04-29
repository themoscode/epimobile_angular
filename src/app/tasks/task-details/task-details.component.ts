import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { Services } from './../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'static-1' ) {
      $event.preventDefault();
      
    }
  };

  data : {};
  
  ngOnInit() {
    console.log(this.data);
  }

  constructor(
    public services: Services,
    private modalService: NgbModal
  ){

    this.data = {
      "primary_key": 4,
      "date_start": "2013-12-15T23:00:00.000Z",
      "date_end": "2013-12-19T23:00:00.000Z",
      "time_start": 32400000,
      "time_end": 59400000,
      "text": "Shipment Flash Barandov #130358-01 einchecken",
      "is_processing": false,
      "processing_user": "",
      "is_completed": true,
      "completed_date": "2014-01-14T23:00:00.000Z",
      "completed_time": 40076000,
      "completed_user": "Antje Lommatzsch",
      "secondary_key": 0,
      "secondary_type": 0,
      "is_all_users": false,
      "contact_name": "Black Box Music Veranstaltungstechnik GmbH",
      "contact_pk": 0,
      "contact": {
        "primary_key": 28,
        "customer_no": 80016,
        "supplier_no": 70015,
        "name": "Black Box Music Veranstaltungstechnik GmbH",
        "name1": "Black Box Music Veranstaltungstechnik GmbH",
        "name2": "",
        "name3": "",
        "matchcode": "BBM",
        "salutation": "",
        "grade": "",
        "is_interested": false,
        "is_client": true,
        "is_supplier": true,
        "is_location": true,
        "is_vip": false,
        "is_colleague": false,
        "_ref_contact": "contact/28"
    },
      "participant": [{
        "primary_key": 4,
        "user_id": 13,
        "user_name": "Admin"
      },
      {
        "primary_key": 5,
        "user_id": 14,
        "user_name": "Admin2"
      }
    ],
      "_participant_length": 1,
      "is_start_date": true,
      "is_end_date": true
    }
  }

  open(content){
    this.modalService.open(content);
  }


}
