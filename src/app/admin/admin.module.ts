import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { MdbModule } from 'mdb-angular-ui-kit';

import { AppRoutingModule } from './app-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AllusersComponent } from './allusers/allusers.component';
import { HeaderComponent } from './header/header.component';
import { MetismenuAngularModule } from '@metismenu/angular';
import { MetissidebarComponent } from './metissidebar/metissidebar.component';
// import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
// import { MdbModule } from 'mdb-angular-ui-kit';

@NgModule({
  declarations: [
    DashboardComponent,
    SidemenuComponent,
    AllusersComponent,
    HeaderComponent,
    MetissidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MetismenuAngularModule
  ]
})
export class AdminModule { }
