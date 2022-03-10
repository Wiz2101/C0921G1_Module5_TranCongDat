import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomerRoutingModule} from './customer/customer-routing.module';
import {EmployeeRoutingModule} from './employee/employee-routing.module';
import {FacilityRoutingModule} from './facility/facility-routing.module';
import {ContractRoutingModule} from './contract/contract-routing.module';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {SidebarComponent} from './common/sidebar/sidebar.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CustomerRoutingModule,
    EmployeeRoutingModule,
    FacilityRoutingModule,
    ContractRoutingModule,
    AppRoutingModule,
    RouterTestingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
