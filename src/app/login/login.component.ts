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

   user !: loginModel ;


  userForm : FormGroup = this.fb.group({
    email : [''],
    password : ['']
  }) ;
  token !: [''];
  constructor(private auth : AuthServiceService,private fb: FormBuilder , private router : Router) { 

  }

  ngOnInit(): void {
  }
  login(){
   //this.auth.login(this.user).subscribe();
    //console.log(this.userForm)
    //this.auth.test().subscribe(response=>console.log(response));
    //this.user = this.userForm.value;
    this.user = {email:"dragos.boboluta@yahoo.com",password:"Paro2346@"};

    this.auth.login(this.user).subscribe({next:()=>{
      this.auth.token().subscribe({next:response=>{localStorage.setItem("id",response),this.router.navigate(["/home"]) },complete:()=>this.router.navigate(["/home"]),error:(err)=>console.log(err)})},error:(err)=>console.log(err)});
    

  }
  logout(){
    this.auth.logout();
  }
}
