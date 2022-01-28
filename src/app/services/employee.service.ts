import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  head=new HttpHeaders({

   
    Authorization: sessionStorage.getItem("token").toString()
  
     })
 
  baseUrl="http://localhost:8080/employee/"
  constructor(private http:HttpClient) { }
   getAll()
   {  return this.http.get(this.baseUrl+ "all",{headers:this.head})}

    editEmp(emp ,idDep)
    {return this.http.put(this.baseUrl+"edit/"+idDep,emp,{headers:this.head})}
    deletEmp(id)
    {return this.http.delete(this.baseUrl+"delete/"+id,{headers:this.head})}
    saveEmp(emp,idDep)
    {console.log(emp)
      
      return this.http.post(this.baseUrl+"add/"+idDep,emp,{headers:this.head})}
    getOne(id){
      console.log(id)
      return this.http.get(this.baseUrl+"findOne/"+id,{headers:this.head})

    }
}
