import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { Services } from './../services';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

/*
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.services.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  constructor(
    private modalService: NgbModal,
    private user:UserService,
    private services: Services
  ) { }

  open(content){
    this.modalService.open(content);
  }

  ngOnInit() {
   // this.getModuleLength('meeting/get/?isp=f','meetingsLength');
   // this.getModuleLength('meeting/get/?isp=f','tasksLength');
  }

  /////////////////////////////////////////
  showTermin = true;
  meetingsLength="10";
  tasksLength="15";
  contactsLength="20";
  productsLength="25";
  ordersLength="30";
  invoicesLength="35";

  ////////////////////////////////////////
  today = Date.now();
  
  loggedUserData = {
    "selectedMandantName":"Mandant",
    "selectedLagerName":"lager",
    "fullname":"Administrator"
  }
/*
  loggedUserData = {
    "selectedMandantName":this.user.getSession('selectedMandantName'),
    "selectedLagerName":this.user.getSession('selectedLagerName'),
    "fullname":this.user.getSession('fullname')
  }
*/

  ////////////////////////////////////

  getModuleLength(url,moduleLength){
    this.services.api.get(url).then(
      (data)=> {
        console.dir(data);
        this[moduleLength]=data["payload_length"];
      },
      (err)=>console.error(err)
    );
  }

}
