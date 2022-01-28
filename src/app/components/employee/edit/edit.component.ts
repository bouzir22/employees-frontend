import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  dpts
empl

  constructor(private departmenService:DepartmentService,private employeeService:EmployeeService,private route:Router,private aroute:ActivatedRoute) { }

  editForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    depId: new FormControl(''),
  });


  ngOnInit(): void {alert("ivoked")
    console.log("invoked")
    console.log(this.aroute.snapshot.paramMap.get('id'))
    this.employeeService.getOne(this.aroute.snapshot.paramMap.get('id')).subscribe(data=>{
      this.empl=data
      console.log(this.empl)


    })
    
    
    this.departmenService.getAll().subscribe(data=> this.dpts=data)
  }
  saveE()
  {this.editForm.value.idUser=this.empl.idUser
    
    this.employeeService.editEmp(this.editForm.value,this.editForm.value.depId).subscribe(
  
  {next: res=>this.route.navigateByUrl("/dashboard"),
    error:err=> {alert("you are not allowed")
    this.route.navigateByUrl("/dashboard")
  
  }
  
  
})

}}
