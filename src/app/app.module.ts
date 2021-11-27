import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistComponent } from './regist/regist.component';
import { LoginrevComponent } from './loginrev/loginrev.component';
import { LogoutComponent } from './logout/logout.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { MetismenuAngularModule } from '@metismenu/angular';
import { TemplatedriveFormComponent } from './templatedrive-form/templatedrive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LifehookComponent } from './lifehook/lifehook.component';
import { BarcodeComponent } from './barcode/barcode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistComponent,
    LoginrevComponent,
    LogoutComponent,
    TemplatedriveFormComponent,
    ReactiveFormComponent,
    LifehookComponent,
    BarcodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MdbModule,
    MetismenuAngularModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
