import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../login/auth/auth-service.service';
import { registerModel } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  userFormRegister : FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    email : [''],
    password : [''],
    passwordConfirmed : [''],
    phone : [''],
    admin : [true]
  }) ;
  constructor(private auth : AuthServiceService,private fb: FormBuilder , private router : Router) { }

  ngOnInit(): void {
  }
  register(){

    this.auth.register(this.userFormRegister.value as registerModel).subscribe({complete:()=>{  console.log("user registered"); this.router.navigateByUrl('/login')},error:(err)=>console.log(err)});
    
  }
}
