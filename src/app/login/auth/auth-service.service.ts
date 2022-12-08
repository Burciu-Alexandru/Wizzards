import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { getAuth } from "firebase/auth";

import {AngularFireAuth} from '@angular/fire/compat/auth';
import  { loginModel }  from '../login.model';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user !: loginModel ;  

  constructor(private http:HttpClient,private auth : AngularFireAuth) {
    

   }

   login(user : loginModel):Observable<any>{
    return  from(this.auth.signInWithEmailAndPassword("dragos.boboluta@yahoo.com","Parola123456@").then(()=>{localStorage.setItem("token","true")},err => console.log(err)));
   }
   register(){

   }
   loginPhone(){
    const auth = getAuth();
    auth.languageCode = 'it';
    console.log(auth);
   }
   token() :Observable<any>{
   var token = this.auth.idToken ; 
   return token;
   }
   logout(){
    this.auth.signOut();

   }
}
