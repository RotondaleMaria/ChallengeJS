import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

    username: new FormControl(''),
    password: new FormControl('')
  })
  
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    
      if(this.loginForm.value.username=="admin@gmail.com" && this.loginForm.value.password == "Admin#123"){ 
      
        this.router.navigate(['/home']);
    }
    else{
      alert("Usuario rechazado");

    }
  }

}

