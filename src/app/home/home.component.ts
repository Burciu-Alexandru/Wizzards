import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../login/auth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthServiceService) { }

  ngOnInit(): void {
  }
  logout (): void{
    this.auth.logout();
  } 
}
