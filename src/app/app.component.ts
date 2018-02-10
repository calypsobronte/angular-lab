import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  name:string;
  response:any;
  baseurl="https://api.genderize.io/?name=";
  constructor (private http:HttpClient){  }

 ngOnInit(){
  
    
  } 
  
  callApi() {
    let url = this.baseurl+this.name;
    this.http.get(url).subscribe( (data)=> {
    this.response=data;
    console.log(this.response);
  });

 }
}
