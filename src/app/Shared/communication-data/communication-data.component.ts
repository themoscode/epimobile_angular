import { Component, OnInit } from '@angular/core';
import { Services } from './../../services';

@Component({
  selector: 'app-communication-data',
  templateUrl: './communication-data.component.html',
  styleUrls: ['./communication-data.component.css']
})
export class CommunicationDataComponent implements OnInit {

  communicationTypes : object[];
  communicationData : object[];

  constructor(
    public services: Services
  ) { 

    this.communicationTypes = services.common.types.communication;
    this.communicationData = services.common.communicationData;
  }

  ngOnInit() {
  }

}
