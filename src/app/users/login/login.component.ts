import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../shared/auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Router } from '@angular/router'

//import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),    
  })

  constructor(
    private  authService:  AuthService,     
    private router: Router,
    ) { }

  ngOnInit() {
  }

  googleLogin(){
    this.authService.loginWithGoogle()    
  }

  onSubmit(){
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)    
  }

  register(){
    this.router.navigate(['register'])
  }

}