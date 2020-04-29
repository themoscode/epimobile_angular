import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'moment-timezone';

@Injectable()
export class Services {
  
  constructor(
    public httpClient:HttpClient,
    private router:Router
    
  ){}
////////////////////////////////////////////////////////
  
states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  tools={
    arrayObjectIndexOf:function(myArray, searchTerm, property){
      //console.log("arrayObjectIndexOf");

      if (myArray != undefined) {
        for (var i = 0, len = myArray.length; i < len; i++) {
          if (myArray[i][property] === searchTerm) return i;
        }
      }
      
      return -1;
    },
    timeFrom4d:function(ms){

      var obj = this.hoursMins(ms);
      return this.twoDigits(obj.hours)+":"+this.twoDigits(obj.mins);

    },
    dateStr: function () {
	
      var date = new Date();

      if (arguments.length > 0) {
        date = arguments[0];
      }

      //	console.log("date="+date);

      var result = "";

      if (date != undefined ) result = ('0' + date.getDate()).slice(-2) + "." + ('0' + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();

      return result;

    },
    timeStr: function () { //TOOLS
	
      var date = new Date();

      if (arguments.length > 0) {
        date = arguments[0];
      }

      var result = "";

      if (date) result = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);


      return result;

    },


    dayNameFrom4d:function(str){
      if (str == undefined) return;
      str = moment(str).tz('Europe/Berlin').format();
      return  moment(str).locale("de").format('dddd');
    },
    dateFrom4d:function(str){
      if (str == undefined) return;
	
				str = moment(str).tz('Europe/Berlin').format();
				//str='2014-03-13T23:00:00.000Z'
	
				str = str.slice(0, 10); //str='2014-03-13' 
				str = str.replace(/-/g, "."); //str='2014/03/13' 
	
				str = this.dateYMDorDMY(str) //str='13/03/2014' 
	
				return str;
    },
    dateYMDorDMY:function(str){
        //if str(format) = d-m-y ---> y-m-d
				//if str(format) = y-m-d ---> d-m-y

				var s = ".";
				if (arguments.length > 1) {
					s = arguments[1];
				}
	
				var res = str.split(s);
				str = res[2] + s + res[1] + s + res[0];
				return str;
    },
    twoDigits: function (str) { //TOOLS
	
      str = "" + str;
      var result = str;
      if (str.length == 1) {
        result = "0" + str;
      }
      return result;
    },
    hoursMins: function (ms) { //TOOLS
	
      var hours = Math.trunc(ms / 60 / 60 / 1000);
      var rest = ms % (60 * 60 * 1000);
      var mins = Math.trunc(rest / 60 / 1000);

      return {
        hours: this.twoDigits(hours),
        mins: this.twoDigits(mins),
      };

      //return services.tools.twoDigits(hours)+":"+services.tools.twoDigits(mins);

    },
    
  }
  
  ////////////////////////////////////////////////////////
  
  api={
    url:'http://192.168.42.2:8080/',
    //url:location.origin+'/',
    version : "v1/",
    get:(url)=>{
       ////////////
    let promise = new Promise((resolve, reject) => {
    
      let url_final = this.api.url+this.api.version+url;
    
      this.httpClient.get(url_final)
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
  }

  common={

    app_settings:{
      showTermin: true,
      showAufgabe: true,
      showAdress: true,
      showZeiterfassung: false,
      showArtikel: true,
      showAuftrag: true,
      showRechnung: true
    },
    getGoogleMap : function(street,postCode, place){
				
				
      var address = "?f=q&hl=de&q="+street+" "+postCode+" "+place;
      window.open("https://www.google.de/maps"+address,"_blank");
      
    },
    communicationData:[],
    communicationDataCp:[], /*Contact person comm. data*/ 
    types:{
      communication: [
        {
          "title":"Tel.",
          "type":0
        },
        {
          "title":"Fax",
          "type":1
        },
        {
          "title":"Mobil",
          "type":2
        },
        {
          "title":"eMail",
          "type":3
        },
        {
          "title":"Web",
          "type":4
        },
        {
          "title":"Chat",
          "type":5
        },
        {
          "title":"Sonstiges",
          "type":6
        }		
          
      
      ]
    }
      
  }

}