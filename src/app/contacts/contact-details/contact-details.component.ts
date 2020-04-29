
import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ModalContactPersonComponent } from './modal-contact-person/modal-contact-person.component';
import { ModalHistoryComponent } from './modal-history/modal-history.component';

import { Services } from './../../services';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent  {

getContact : object;
accordion : object;

//communicationTypes : object[];

open(content){
    this.modalService.open(content);
}

openModalContactPerson(data) {
    const modalRef = this.modalService.open(ModalContactPersonComponent);
    modalRef.componentInstance.data = data; 

    console.log("data",data);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openModalHistory(data) {
    const modalRef = this.modalService.open(ModalHistoryComponent);
    modalRef.componentInstance.data = data; 

    console.log("data",data);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  } 

toggleAccordion(e){
    console.log("e=",e);
    this.accordion[e.panelId] = e.nextState;
    console.log(this.accordion);
}

 
 constructor(
    public services: Services,
    private modalService: NgbModal
  ) {

    //this.communicationTypes = services.common.types.communication;
    

    this.accordion = {
     "ngb-panel-0":false,
     "ngb-panel-1":false,
     "ngb-panel-2":false
    };

    this.getContact = {
      "primary_key": 460,
      "customer_no": 80415,
      "supplier_no": 70191,
      "is_single_person": false,
      "name": "1 & 1 Internet AG",
      "name1": "1 & 1 Internet AG",
      "name2": "",
      "name3": "",
      "matchcode": "",
      "is_interested": false,
      "is_client": true,
      "is_supplier": true,
      "is_location": false,
      "is_vip": true,
      "is_colleague": false,
      "salutation": "Ms.",
      "grade": "Dr.",
      "notes_positive": "positiv",
      "notes_negative": "negativ",
      "date_of_birth": "0000-00-00T00:00:00",
      "address": {
          "primary_key": 1064,
          "postal_code": "56410",
          "street": "Eigendorfer Str. 57",
          "city": "Montabaur",
          "country": "GERMANY",
          "country_iso3": "DEU",
          "federal_state": ""
      },
      "communication": [{
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
          "uplink": "www.ff.gr",
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
          "uplink": "12345",
          "type": 0,
          "description": "",
          "phone_match_number": "12345",
          "position": 0,
          "is_newsletter": false,
          "is_invoice": false,
          "$$hashKey": "object:191"
      }, {
          "primary_key": 2933,
          "contact_pk": 460,
          "contact_person_pk": 0,
          "uplink": "0721 96 00",
          "type": 0,
          "description": "",
          "phone_match_number": "07219600",
          "position": 0,
          "is_newsletter": false,
          "is_invoice": false,
          "$$hashKey": "object:192"
      }],
      "_communication_length": 4,
      "contact_person": [
          {
            "primary_key": 535,
            "contact_pk": 460,
            "name": "george Lucas",
            "first_name": "george",
            "last_name": "Lucas",
            "nickname": "",
            "position": "Verkäufer",
            "_ref_contact_person": "cperson/535",
            "$$hashKey": "object:146"
        },
        {
            "primary_key": 536,
            "contact_pk": 460,
            "name": "John Pappas",
            "first_name": "John",
            "last_name": "Pappas",
            "nickname": "Pappi",
            "position": "Verkäufer",
            "_ref_contact_person": "cperson/536",
            "$$hashKey": "object:147"
        }
    ],
      "_contact_person_length": 1,
      "contact_chrono": [{
          "primary_key": 9,
          "contact_pk": 460,
          "contact_person_pk": 535,
          "keyword": "installation todesstern",
          "contact_partner": "george Lucas",
          "date": "2017-12-10T23:00:00.000Z",
          "time": 64437000,
          "duration": 26,
          "com_type": 1,
          "com_type_str": "Telefon",
          "uplink": "12345",
          "_ref_contact_chrono": "cchrono/9",
          "$$hashKey": "object:152"
      },
      {
        "primary_key": 10,
        "contact_pk": 460,
        "contact_person_pk": 536,
        "keyword": "installation todesstern2",
        "contact_partner": "John Pappas",
        "date": "2017-12-09T23:00:00.000Z",
        "time": 64437002,
        "duration": 36,
        "com_type": 1,
        "com_type_str": "Telefon",
        "uplink": "12345",
        "_ref_contact_chrono": "cchrono/10",
        "$$hashKey": "object:153"
    }
    
    
    ],
      "_contact_chrono_length": 1,
      "order": "",
      "_order_length": 0,
      "banking_client": {
          "account_holder": "",
          "iban": "",
          "bic": "",
          "bank_name": "",
          "account_no": "",
          "creditworthiness": false,
          "executed_on": "0000-00-00T00:00:00.000Z",
          "credit_rating": 0,
          "employees_count": 0,
          "company_foundation": "0000-00-00T00:00:00.000Z",
          "sepa": {
              "is_active": false,
              "mandate": "",
              "date_signature": "0000-00-00T00:00:00.000Z"
          }
      },
      "banking_supplier": {
          "account_holder": "1 & 1 Internet AG",
          "iban": "DE832004000006301485",
          "bic": "COBADEFFXXX",
          "bank_name": "Commerzbank",
          "account_no": ""
      },
      "price_range": {},
      "__image": "./Assets/img/image_128x128.png"
  }

  services.common.communicationData = this.getContact['communication'];
  console.log("communicationData",services.common.communicationData);

  }

  ngOnInit() {
    console.log("gerContact",this.getContact);
    console.log("accordion",this.accordion);
   
  }

  

}
