import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EmployeeDetailsComponent>, @Inject(MAT_DIALOG_DATA)public data:
  DialogData) { }

  ngOnInit(): void {
  }

}
