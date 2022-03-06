import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {EmpCreateComponent} from './employee/emp-create/emp-create.component';
import {EmpEditComponent} from './employee/emp-edit/emp-edit.component';
import {EmpListComponent} from './employee/emp-list/emp-list.component';
import { FacListComponent } from './facility/fac-list/fac-list.component';
import { FacEditComponent } from './facility/fac-edit/fac-edit.component';
import { FacCreateComponent } from './facility/fac-create/fac-create.component';
import { CusListComponent } from './customer/cus-list/cus-list.component';
import { CusCreateComponent } from './customer/cus-create/cus-create.component';
import { EditComponent } from './customer/edit/edit.component';
import { ConCreateComponent } from './contract/con-create/con-create.component';
import { ConListComponent } from './contract/con-list/con-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EmpCreateComponent,
    EmpEditComponent,
    EmpListComponent,
    FacListComponent,
    FacEditComponent,
    FacCreateComponent,
    CusListComponent,
    CusCreateComponent,
    EditComponent,
    ConCreateComponent,
    ConListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
