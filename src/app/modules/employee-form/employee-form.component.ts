import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../models/employee';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  // It is sending Employee JSON to backend via HTTP POST REQUEST
  onSubmit() {
    this.employeeService.save(this.employee).subscribe();
  }
  ngOnInit(): void {  }

  // It adds job email address auto-generated from first and last name to JSON
  adaptEmployeeToJSON(employee) {
    employee.jobEmailAddress = employee.firstName + '.' + employee.lastName+'@eo.pl'
    employee.dateOfBirth.setHours(12)
  }
}
