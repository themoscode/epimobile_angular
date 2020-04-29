import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Services} from './services';

@Injectable()
export class UserService {
  
  constructor(
    private httpClient:HttpClient,
    private router:Router,
    private services: Services
  ){}
  
  setInfo(data){

    let promise = new Promise((resolve, reject) => {
      
      let postData = {
          user_id: data.user_id,
					selected_mandant_id: data.selectedMandantID,
					selected_warehouse_id: data.selectedLagerID
      }
      
      let url = this.services.api.url+'setinfo';

      this.httpClient.post(url+'setinfo',postData)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }
  
  setSession(data){
    sessionStorage.userData = JSON.stringify(data);
    console.log('sessionStorage',sessionStorage);
  }

  getSession(item){
    return JSON.parse(sessionStorage.userData)[item];
  }
  
  logOut(){
    sessionStorage.removeItem("userData");
    ////////////
    let promise = new Promise((resolve, reject) => {
    
      let url = this.services.api.url+'logout';
    
      this.httpClient.get(url)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
    ///////////
  }


  isLoggedIn(){
    if (sessionStorage.getItem("userData") !== null ) {
      return true;
    }
    return false;
  }

  logIn(username,password){

    console.log("this.services.api.url",this.services.api.url);

    let promise = new Promise((resolve, reject) => {
      let credentials = btoa(encodeURI(encodeURIComponent(username)) + ":" + password);
      let headers = new HttpHeaders().set('Authorization', 'Basic' + credentials);
      
      let url = this.services.api.url+'login';
      
      this.httpClient.get(url,{headers})
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }
}



