import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../login/auth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthServiceService,private router : Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(response=>console.log(response));
  }
  logout (): void{
    this.auth.logout();
    this.router.navigate(['login']);
  } 
}
