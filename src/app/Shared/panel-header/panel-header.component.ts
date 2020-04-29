import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Services } from '../../services';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css']
})
export class PanelHeaderComponent  {

  constructor(
    private modalService: NgbModal,
    private router:Router,
    private user:UserService,
    private services: Services
  ) {}

  open(content){
    this.modalService.open(content);
  }

  logOutUser(){

    this.user.logOut().then(
      (result)=>{
       console.log('logged out');
        console.dir(result);
      },
      (err)=>console.error(err)
    )
  this.router.navigate(['/']);
  }

}
