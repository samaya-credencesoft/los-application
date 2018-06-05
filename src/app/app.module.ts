import { DashboardService } from './services/dashboard_services/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModules } from './material.module';
import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { LoanApplicationNew } from './components/los_application/newloanapplication.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import { Logger } from './services/common_services/logger.service';
import { AddressService } from './services/common_services/address.service';
import { CustomerOnboardingService } from './services/los_application_services/los.loanapplication.service';
// import {AuthService} from './services/common_services/auth.service';
// import {AuthGuard} from './services/common_services/auth-guard.service';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    HttpModule,
    routing,
    DataTablesModule
    ],
  declarations: [
     LoanApplicationNew,
     AppComponent,
     ],
  bootstrap: [AppComponent],
  providers:[
    Logger,
    AddressService,
    CustomerOnboardingService,
    DashboardService
    // AuthService,
    // AuthGuard
  ]

})
export class AppModule { }