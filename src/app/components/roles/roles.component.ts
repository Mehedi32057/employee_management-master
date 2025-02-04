import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Apireponse ,IRole } from '../../modal/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  //jehetu data array of object tai array r moddhe store kora hocche
  //if we are geeting array of object so now we need to create interface. either we can create class or interface
rolelist:IRole[]=[]

//new way for inject http
http=inject(HttpClient)

  //old way or http constructor use
  // constructor(private http:Httpclient){}


 //ng on Init use for page Loading
  ngOnInit(): void {
    //when componant load we need to call this function
    this.getAllroles()
      
}

//when calling this method i want to data display so after method create need to create oninit

getAllroles(){
  //url hocche data type of string api j data dibe eta catch korbe subscribe this is the basic of api call function 
  //now amra api data thke j property pabo eta store korte hbe
  //so data store korar  variable niye thki
  this.http.get<Apireponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:Apireponse)=>{
    //ei data gula ekhn ekhn e store korte hbe 
    this.rolelist=res.data;

  })
}






































//   firstName:string="Angular Tutorial";
//   version:number=18
//   isActive:Boolean=false;
//   currentDate:Date=new Date();
//  inputType: string="button";
//  selectdStates:string='';
//  showWelcomeAlert(){
//   alert("Welcome to my Angular project")

//  }

//  showMessage(message:string){
//   alert(message)

//  }

}
