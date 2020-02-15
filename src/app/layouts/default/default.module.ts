import { NgModule } from '@angular/core';
import { DefaultComponent } from './default.component';
import {AppComponent} from '../../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DefaultModule { }
