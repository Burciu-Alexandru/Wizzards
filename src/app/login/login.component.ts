import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AuthServiceService } from './auth/auth-service.service';
import { loginModel } from './login.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { userModel } from './auth/user.model';
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
    var id ="";
    this.auth.login(this.userForm.value as loginModel).pipe(takeUntil(this.loginSub)).subscribe({next:response=>{var isAdmin = this.auth.isAdmin(response).subscribe(response=>{
      var item = response[0] as userModel;
      if(item.admin==true){
        //console.log("is admin");
        this.router.navigate(["admin"])
      }else{
        this.router.navigate(['home/l0bW9TQ2pkRIOWIuKCuQuutLeY23'])
        //console.log("is not admin");
      }
    }) } });
    //var isAdmin = this.auth.isAdmin;
   // console.log(isAdmin);

  }
  logout(){
    this.auth.logout();
  }
}
