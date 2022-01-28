import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private aroute:ActivatedRoute ,private route:Router) { }

  ngOnInit(): void {
    this.employeeService.deletEmp(this.aroute.snapshot.paramMap.get("id")).subscribe(

      {next:resp => {alert("deleted")
    this.route.navigateByUrl("/dashboard")}

      ,error: err=>
      {      alert("you're not allowed")
      this.route.navigateByUrl("/dashboard")}
      

      }
    )
  }

}
