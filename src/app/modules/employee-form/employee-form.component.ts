import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;

  // Stepper
  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
    this.employee = new Employee();
  }
  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/employees-list']);
  }
  ngOnInit(): void {

  }


}
