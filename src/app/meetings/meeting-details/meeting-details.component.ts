import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { Services } from './../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent implements OnInit {

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
      "primary_key": 7,
      "date_start": "2016-06-30T22:00:00.000Z",
      "date_end": "2016-06-30T22:00:00.000Z",
      "time_start": 54000000,
      "time_end": 57900000,
      "text": "hello world um 15 uhr",
      "notes": "notes",
      "contact_name": "Black Box Music Veranstaltungstechnik GmbH",
      "contact_pk": 28,
      "private_user_pk": 0,
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
          "primary_key": 13,
          "user_id": 1,
          "user_name": "Administrator"
      },{
        "primary_key": 14,
        "user_id": 2,
        "user_name": "Administrator2"
        }],
      "_participant_length": 1,
      "is_start_date": true,
      "is_end_date": true,
      "is_private": false
    }

  }

  open(content){
    this.modalService.open(content);
  }


}
