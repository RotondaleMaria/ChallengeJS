import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  logInUser(){
    if(this.username=="admin@gmail.com" && this.password == "Admin#123"){ 
      console.log("Bienvenido, usuario autorizado")
    }
    else{
      console.log("Usuario rechazado");

    }
    
  }

}
