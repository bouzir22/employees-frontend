import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8080/departments/"
  getAll()
  {let   head=new HttpHeaders({

  
   Authorization: sessionStorage.getItem("token").toString()
 
    })
     /*  console.log(head)
    alert(sessionStorage.getItem("token"))*/
 
   return this.http.get(this.baseUrl+ "all",{headers:head})}

}
