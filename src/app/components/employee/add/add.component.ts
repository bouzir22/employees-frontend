import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
dpts

addForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
  email: new FormControl(''),
  depId: new FormControl(''),
});

  constructor(private departmenService:DepartmentService,private employeeService:EmployeeService,private route:Router) { }

  ngOnInit(): void {this.departmenService.getAll().subscribe(data=> this.dpts=data)
  }
saveE()
{this.employeeService.saveEmp(this.addForm.value,this.addForm.value.depId).subscribe(

{next: res=>this.route.navigateByUrl("/dashboard"),
  error:err=> alert("something went wrong")

}


)}
}
