import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AuthServiceService } from './auth/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  constructor(private auth : AuthServiceService) { 

  }

  ngOnInit(): void {
  }
  login(){
   this.auth.login().subscribe(response=>console.log(response))
  }
  loginWithPhone(){
    //this.auth.loginPhone();
    this.auth.test();
  }

}
