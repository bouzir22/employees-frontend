import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="http://localhost:8080/"

  constructor(private http:HttpClient) { }

  tryLogin(auth:any)
  {console.log(auth)
    
    return this.http.post(this.baseUrl+"signin",auth)}
}
