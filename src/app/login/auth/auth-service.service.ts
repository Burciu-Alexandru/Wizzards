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
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user !: loginModel ;  
  tokenId !: string;
  constructor(private http:HttpClient,private auth : AngularFireAuth,private firestore: AngularFirestore,private router : Router) {
    

   }

   login(user : loginModel):Observable<any>{
    return  from(this.auth.signInWithEmailAndPassword(user.email,user.password)).pipe(map(response=>{
      this.tokenId=response.user?.uid  as string;
      localStorage.setItem("id",this.tokenId);
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
        admin : user.admin
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
    this.auth.signOut().then(()=>{this.router.navigateByUrl("login"); localStorage.clear();});
   
   }
   isAdmin(uid :string){
      var isAdmin = false;
      var user: registerModel ; 
      this.firestore.collection("users").stateChanges().pipe(map(actions => {
        return actions.map(a => {
          //const data = a.payload.doc.data() as Shirt;
          const id = a.payload.doc.id;
          
          if(id==uid) 
         { user = a.payload.doc.data() as registerModel;
          this.tokenId = id;
          
          if(user.admin==true)
            isAdmin= true;
         }
        });
      })).subscribe({next:()=>{if(isAdmin==true){
        this.router.navigateByUrl('/admin');
      }
    else{
      this.router.navigate(["home",this.tokenId]);
    }}});
     // return true;
   }
   
}
