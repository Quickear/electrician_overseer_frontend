import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {EmployeeFormComponent} from './modules/employee-form/employee-form.component';
import {EmployeeListComponent} from './modules/employee-list/employee-list.component';
import {UserComponent} from './modules/user/user.component';
import {CustomerFormComponent} from './modules/customer-form/customer-form.component';
import {CustomerListComponent} from './modules/customer-list/customer-list.component';
import {JobOrderFormComponent} from './modules/job-order-form/job-order-form.component';
import {JobOrderListComponent} from './modules/job-order-list/job-order-list.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
    {
      path: 'employees-form',
      component: EmployeeFormComponent
    },
    {
      path: 'employees-list',
      component: EmployeeListComponent
    },
    {
      path: 'customers-form',
      component: CustomerFormComponent
    },
    {
      path: 'customers-list',
      component: CustomerListComponent
    },
    {
      path: 'joborder-form',
      component: JobOrderFormComponent
    },
    {
      path: 'joborder-list',
      component: JobOrderListComponent
    },
    {
      path: 'users',
      component: UserComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
