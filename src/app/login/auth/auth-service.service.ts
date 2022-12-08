import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return  from(this.auth.signInWithEmailAndPassword("dragos.boboluta@yahoo.com","Parola123456@"));
   }
   register(){

   }
   loginPhone(){
    const auth = getAuth();
    auth.languageCode = 'it';
    console.log(auth);
   }
   test() :Observable<any>{
    //var result = this.auth.createUserWithEmailAndPassword("dragos.boboluta2@yahoo.com","Parola123456@");
    //var result = this.auth.signInWithEmailAndPassword("dragos.boboluta@yahoo.com","Parola123456@");
   //
   var token = this.auth.idToken
   return token;
   }
   logout(){
    this.auth.signOut();
   }
}
