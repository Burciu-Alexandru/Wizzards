import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { getAuth } from "firebase/auth";

import {AngularFireAuth} from '@angular/fire/compat/auth';
import  { loginModel }  from '../login.model';
import { from } from 'rxjs';
import { registerModel } from 'src/app/register/register.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user !: loginModel ;  
  tokenId !: string | null;
  constructor(private http:HttpClient,private auth : AngularFireAuth,private firestore: AngularFirestore) {
    

   }

   login(user : loginModel):Observable<any>{
    return  from(this.auth.signInWithEmailAndPassword("dragos.boboluta@yahoo.com","Parola123456@"))
  }
   register(user: registerModel):Observable<any>{
    return from(this.auth.createUserWithEmailAndPassword(user.email,user.password)).pipe(map(response=>{
      this.firestore.collection('users').doc(response.user?.uid).set({
        bio :"",
        nume : user.firstName,
        prenume : user.lastName,
        email : user.email,
        numarTelefon : user.phone,
      });
      console.log(response.user?.uid);
    }) );
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
