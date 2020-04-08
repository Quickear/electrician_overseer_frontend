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
      width: 'auto',height: 'auto',
      data: {
        id: employeeDetails.id,
        firstName: employeeDetails.firstName,
        lastName: employeeDetails.lastName,
        dateOfBirth: employeeDetails.dateOfBirth,
        gender: employeeDetails.gender,
        country: employeeDetails.address.country,
        city: employeeDetails.address.city,
        street: employeeDetails.address.street,
        postCode: employeeDetails.address.postCode,
        jobEmailAddress: employeeDetails.jobEmailAddress,
        privateEmailAddress: employeeDetails.contactInfo.emailAddress,
        contactNumber: employeeDetails.contactInfo.contactNumber,
        alternateContactNumber: employeeDetails.contactInfo.alternateContactNumber,
        emergencyContactNumber: employeeDetails.contactInfo.emergencyContactNumber,
        salary: employeeDetails.salary,
        jobTitle: employeeDetails.jobTitle,
        contractType: employeeDetails.contractType
      }
    });
  }
}
