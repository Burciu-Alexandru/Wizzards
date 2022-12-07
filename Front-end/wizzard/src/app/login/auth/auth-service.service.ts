import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) {
    

   }

   login():Observable<any>{
    return this.http.get<any>("https://localhost:7176/swagger/index.html");
   }
   register(){

   }
}
