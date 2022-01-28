import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
employees
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
   this.fetchEmployees()
  }
  fetchEmployees()
  { this.employeeService.getAll().subscribe(data=> this.employees=data)}

}
