import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginServiceService } from './services/login-service/login-service.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerdetailsComponent } from './components/customerdetails/customerdetails.component';
import { CustomerRequestsComponent } from './components/customer-requests/customer-requests.component';
import { CustomerRequestsListComponent } from './components/customer-requests-list/customer-requests-list.component';
import { CustomerRequestDetailsComponent } from './components/customer-request-details/customer-request-details.component';
import { AccountslistComponent } from './components/accountslist/accountslist.component';
// import { CustomerRequestsListComponent } from './customer-requests-list/customer-requests-list.component';
// import { MaincustomerlistComponent } from './components/maincustomerlist/maincustomerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    CustomerlistComponent,
    CustomerdetailsComponent,
    CustomerRequestsComponent,
    CustomerRequestsListComponent,
    CustomerRequestDetailsComponent,
    AccountslistComponent,
    // MaincustomerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
