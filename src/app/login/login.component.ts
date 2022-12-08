import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AuthServiceService } from './auth/auth-service.service';
import { loginModel } from './login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : loginModel = {
    email : "dragos.boboluta@yahoo.com",
    password : "Parola123456@"
  };

  constructor(private auth : AuthServiceService) { 

  }

  ngOnInit(): void {
  }
  login(){
   //this.auth.login(this.user).subscribe();
    this.logout();
    this.auth.test().subscribe(response=>console.log(response));
  }
  loginWithPhone(){
    //this.auth.loginPhone();
    this.auth.test();
  }
  logout(){
    this.auth.logout();
  }
}
