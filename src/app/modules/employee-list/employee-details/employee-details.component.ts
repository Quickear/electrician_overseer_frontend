import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../employee-list.component';
import {FormGroup} from '@angular/forms';
import {EmployeeService} from '../../../service/employee.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  window: any;


  constructor(public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,) {

  }

  ngOnInit(): void {
  }

  mailToPrivateEmailAddress() {
    window.location.href = 'mailto:'+this.data.jobEmailAddress;
  }

  mailToJobEmailAddress() {
    window.location.href = 'mailto:'+this.data.privateEmailAddress;
  }
}

