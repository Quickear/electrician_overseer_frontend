import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private employeeURL: string;
constructor(private http: HttpClient) {
  this.employeeURL = 'http://localhost:8080/api/employees/'
}
public findAll(): Observable<Employee[]> {
  return this.http.get<Employee[]>('http://localhost:8080/api/employees/all');
}

public save(employee: Employee) {
  // employee.createTime = Date.now(); TODO: Add when ready in backend
  return this.http.post<Employee>(this.employeeURL, employee);
}

public update(employee: Employee) {
  // employee.lastUpdated = Date.now(); TODO: Add when ready in  backend
  return this.http.put<Employee>(this.employeeURL, employee);
}}
