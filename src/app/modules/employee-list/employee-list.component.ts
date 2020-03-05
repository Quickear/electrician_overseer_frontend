import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';

export interface DialogData {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  country: string;
  city: string;
  street: string;
  postCode: string;
  jobEmailAddress: string;
  privateEmailAddress: string;
  contactNumber: string;
  alternateContactNumber: string;
  salary: number;
  jobTitle: string;
  contractType: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  displayedColumns = ['id', 'firstName', 'lastName', 'jobTitle', 'jobEmailAddress'];


  constructor(private router: Router, private employeeService: EmployeeService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.employeeService.findAll()
      .subscribe(data => {
        this.employees = data;
        console.log(this.employees);
      });
  }

  openDialog(employeeDetails: Employee) {
    this.dialog.open(EmployeeDetailsComponent, {
      width: '90%',height: '90%',
      data: {
        id: employeeDetails.id,
        firstName: employeeDetails.firstName,
        lastName: employeeDetails.lastName,
        dateOfBirth: employeeDetails.dateOfBirth,
        gender: employeeDetails.gender,
        country: employeeDetails.country,
        city: employeeDetails.city,
        street: employeeDetails.street,
        postCode: employeeDetails.postCode,
        jobEmailAddress: employeeDetails.jobEmailAddress,
        privateEmailAddress: employeeDetails.privateEmailAddress,
        contactNumber: employeeDetails.contactNumber,
        alternateContactNumber: employeeDetails.contactNumber,
        salary: employeeDetails.salary,
        jobTitle: employeeDetails.jobTitle,
        contractType: employeeDetails.contractType
      }
    });
  }
}
