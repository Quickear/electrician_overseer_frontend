import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './service/employee.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomerService} from './service/customer.service';



@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [EmployeeService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
