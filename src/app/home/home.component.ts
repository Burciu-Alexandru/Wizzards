import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../login/auth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthServiceService,private router : Router) { }

  ngOnInit(): void {
  }
  logout (): void{
    this.auth.logout();
    this.router.navigate(['login']);
  } 
}
