import { Component, OnInit } from '@angular/core';
import { Services } from './../../services';

@Component({
  selector: 'app-communication-data-cp',
  templateUrl: './communication-data-cp.component.html',
  styleUrls: ['./communication-data-cp.component.css']
})
export class CommunicationDataCpComponent implements OnInit {

  communicationTypes : object[];
  communicationData : object[];

  constructor(
    public services: Services
  ) { 

    this.communicationTypes = services.common.types.communication;
    this.communicationData = services.common.communicationDataCp;
  }

  ngOnInit() {
  }

}
