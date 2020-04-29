import { Component, Input,OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Services } from './../services';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-lager-mandant/modal-lager-mandant.component.html',
  styleUrls: ['./modal-lager-mandant/modal-lager-mandant.component.css']
})
export class modalLagerMandantComponent implements OnInit {
  @Input() data;

  selectedMandant;
  selectedLager;
  
  

  constructor(
    public activeModal: NgbActiveModal,
    private router:Router,
    private user:UserService,
    private services: Services
  ) {}
  



  

  oooooosubmitLagerMandant(){
    

    this.data.selectedMandantID = this.selectedMandant.mandant_id;
    this.data.selectedMandantName = this.selectedMandant.mandant_name;
    
    this.data.selectedLagerID = this.selectedLager.Primary_Key;
    this.data.selectedLagerName = this.selectedLager.Name;

    console.log("submitted");
    console.dir(this.data);

    /////////////////////////
 
    this.user.setInfo(this.data).then(
      (result)=>{
       console.log('setinfo result');
        console.dir(result);
        this.user.setSession(this.data);
        this.router.navigate(['home']);
      },
      (err)=>console.error(err)
    )
    
  
    ////////////////////////////////

    this.activeModal.close();
  }


  submitLagerMandant(){
    
    
    this.user.setInfo(this.data).then(
      (result)=>{
       console.log('setinfo result');
        console.dir(result);
        this.user.setSession(this.data);
        //this.router.navigate(['home']);
      },
      (err)=>console.error(err)
    )
    


    this.router.navigate(['home']);
    this.activeModal.close();
 
  }



  on_mandant_change(newValue) {
    console.log(newValue);
    
    if (this.selectedMandant.warehouse.length == 1) {
      this.selectedLager = this.selectedMandant.warehouse[0];
    }
 
}


  ngOnInit(){
    console.log("data=",this.data);
    
    console.log(this.services);
     ////////////////////////////////////////
     
	  if (this.data.mandanten.length == 1) {
      this.selectedMandant = this.data.mandanten[0];
      }
      else if (this.data.mandanten.length > 1) {
      
      let selectedMandantIndex = this.services.tools.arrayObjectIndexOf(
        this.data.mandanten,
        this.data.last_mandantID,
        "mandant_id");
      
        this.selectedMandant = this.data.mandanten[selectedMandantIndex];  
      }
  
      ////
  
      if (this.selectedMandant.warehouse.length == 1) {
        this.selectedLager = this.selectedMandant.warehouse[0];
      }
  
      else if (this.selectedMandant.warehouse.length > 1) {
  
        let selectedLagerIndex = this.services.tools.arrayObjectIndexOf(
        this.selectedMandant.warehouse,
        this.data.last_warehouseID,
        "Primary_Key");
        
        this.selectedLager = this.selectedMandant.warehouse[selectedLagerIndex];
      }
      
      console.log("selectedMandant");
      console.dir(this.selectedMandant);
      console.log("selectedLager");
      console.dir(this.selectedLager);

      //////////////////////////////////////////////////


  }


}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {

  constructor(
    private modalService: NgbModal,
    private router:Router,
    private user:UserService,
    private services: Services
  ) { }

  
  openLagerMandantModal(data) {
    const modalRef = this.modalService.open(modalLagerMandantComponent);
    modalRef.componentInstance.data = data;
    console.dir(data);
  }


  loginUser(e){
    
    this.router.navigate(['home']);
       
  }


  oologinUser(e){
    
    //console.log(this.services.testFunc());

    e.preventDefault();
    console.log(e);
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    
    this.user.logIn(username,password).then(
      (data)=> {
        //console.log(data['success']);
        //console.dir(data);
        if (data['success'] === true){
         // this.services.userData = data;
          console.dir(data);
          console.log('mandanten-length=', data['mandanten'].length);

          console.log('mandanten[0].warehouse.length=', data['mandanten'][0].warehouse.length);

          if (data['mandanten'].length == 1){

              if (data['mandanten'][0].warehouse.length == 1){

                data['selectedMandantID'] = data['mandanten'][0].mandant_id;
                data['selectedMandantName'] = data['mandanten'][0].mandant_name;

                data['selectedLagerID'] = data['mandanten'][0].warehouse[0].Primary_Key;
                data['selectedLagerName'] = data['mandanten'][0].warehouse[0].Name;
                
                /////////////////////////
                /*
                this.user.setInfo(data).then(
                  (result)=>{
                   console.log('setinfo result');
                    console.dir(result);
                    this.user.setSession(data);
                    this.router.navigate(['home']);
                  },
                  (err)=>console.error(err)
                )
               */

                ////////////////////////////////

              }
              else if (data['mandanten'][0].warehouse.length >1 ) {
                this.openLagerMandantModal(data);
              }
          
          
          
          }
          else {
            this.openLagerMandantModal(data);
          }


         // this.user.setUserLoggedIn();
          //this.router.navigate(['home']);
          //this.openLagerMandantModal(data);
        }
      },
      (err)=>console.error(err)
    );
       
  }

}

//https://www.youtube.com/watch?v=MJncyf_veEY
