import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AuthServiceService } from './auth/auth-service.service';
import { loginModel } from './login.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm : FormGroup = this.fb.group({
    email : [''],
    password : ['']
  }) ;
  constructor(private auth : AuthServiceService,private fb: FormBuilder , private router : Router) { 

  }

  ngOnInit(): void {
  }
  login(){
  

    this.auth.login(this.userForm.value as loginModel).subscribe(
      {
        complete:()=>this.router.navigateByUrl("/home"),
        error:(err)=>console.log(err)
      }
    );
    

  }
  logout(){
    this.auth.logout();
  }
}
