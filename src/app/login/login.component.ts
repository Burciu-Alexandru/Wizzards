import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AuthServiceService } from './auth/auth-service.service';
import { loginModel } from './login.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy{

  userForm : FormGroup = this.fb.group({
    email : [''],
    password : ['']
  }) ;
  loginSub = new Subject<any>();
  constructor(private auth : AuthServiceService,private fb: FormBuilder , private router : Router) { 

  }
  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }

  ngOnInit(): void {
  }
  login(){
  
    console.log("hello");
    this.auth.login(this.userForm.value as loginModel).subscribe( );
    

  }
  logout(){
    this.loginSub.complete();
    this.auth.logout();
  }
}
