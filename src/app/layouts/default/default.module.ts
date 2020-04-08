import {NgModule} from '@angular/core';
import {DefaultComponent} from './default.component';
import {AppComponent} from '../../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {EmployeeFormComponent} from '../../modules/employee-form/employee-form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {EmployeeListComponent} from '../../modules/employee-list/employee-list.component';
import {EmployeeService} from '../../service/employee.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';
import {EmployeeDetailsComponent} from '../../modules/employee-list/employee-details/employee-details.component';
import {CustomerFormComponent} from '../../modules/customer-form/customer-form.component';
import {CustomerListComponent} from '../../modules/customer-list/customer-list.component';
import {JobOrderFormComponent} from '../../modules/job-order-form/job-order-form.component';
import {JobOrderListComponent} from '../../modules/job-order-list/job-order-list.component';
import {CustomerDetailsComponent} from '../../modules/customer-list/customer-details/customer-details.component';
import {CustomerService} from '../../service/customer.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CustomerFormComponent,
    CustomerListComponent,
    JobOrderFormComponent,
    JobOrderListComponent,
    CustomerDetailsComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
        MatTableModule,
        MatSidenavModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        FormsModule

    ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pl-PL'}, EmployeeService, CustomerService],
  bootstrap: [AppComponent],

})
export class DefaultModule {
}
