import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAuth } from "firebase/auth";
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient,private auth : AngularFireAuth) {
    

   }

   login():Observable<any>{
    return this.http.get<any>("https://localhost:7176/swagger/index.html");
   }
   register(){

   }
   loginPhone(){
    const auth = getAuth();
    auth.languageCode = 'it';
    console.log(auth);
   }
   test() :void{
    var result = this.auth.createUserWithEmailAndPassword("dragos.boboluta2@yahoo.com","Parola123456@").then((value)=>{this.auth.signInWithEmailAndPassword("dragos.boboluta@yahoo.com","Parola123456@");console.log(value)});
    console.log(result);
   }
}
