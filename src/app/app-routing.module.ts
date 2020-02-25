import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {EmployeeFormComponent} from './modules/employee-form/employee-form.component';
import {EmployeeListComponent} from './modules/employee-list/employee-list.component';
import {UserComponent} from './modules/user/user.component';


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
      path: 'users',
      component: UserComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
