import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { getAuth } from "firebase/auth";

import {AngularFireAuth} from '@angular/fire/compat/auth';
import  { loginModel }  from '../login.model';
import { from } from 'rxjs';
import { registerModel } from 'src/app/register/register.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { userModel } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user !: loginModel ;  
  tokenId !: string;
  //isAdmin :boolean = false;

  constructor(private http:HttpClient,private auth : AngularFireAuth,private firestore: AngularFirestore,private router : Router) {
    

   }

   login(user : loginModel):Observable<any>{
    return  from(this.auth.signInWithEmailAndPassword(user.email,user.password)).pipe(map(response=>{
      this.tokenId=response.user?.uid  as string;
      localStorage.setItem("id",this.tokenId);
      //var isAdmin = this.isAdmin(this.tokenId);
      return this.tokenId;
      
      
     
    })) 
  }
   register(user: registerModel):Observable<any>{
    return from(this.auth.createUserWithEmailAndPassword(user.email,user.password)).pipe(map(response=>{
      this.firestore.collection('users').doc(response.user?.uid).set({
        bio :"",
        nume : user.firstName,
        prenume : user.lastName,
        email : user.email,
        numarTelefon : user.phone,
        admin : user.admin ,
        id : response.user?.uid as string
      });
      this.tokenId = response.user?.uid as string;
      localStorage.setItem("id",this.tokenId);
    }) );
   }
   loginPhone(){
    const auth = getAuth();
    auth.languageCode = 'it';
   }
   token() :Observable<any>{
   var token = this.auth.idToken ; 
   return token;
   }
   logout(){
     localStorage.clear();

   
   }
  isAdmin(uid : string){
    
   
    
    
    return this.firestore.collection("users",ref=>ref.where("id","==",uid)).valueChanges();
  }
   
}
