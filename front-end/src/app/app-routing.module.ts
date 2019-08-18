import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { AuthGuardGuard } from './guards/AuthGuard/auth-guard.guard';
// import { LoginGuard } from './guards/Login/login.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { CustomerdetailsComponent } from './components/customerdetails/customerdetails.component';
// import { MaincustomerlistComponent } from './components/maincustomerlist/maincustomerlist.component';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full'}, //canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent},// canActivate: [LoginGuard] },
  { path: "customerlist", component: CustomerlistComponent},
  { path: "pagenotfound", component: PagenotfoundComponent},
  { path: "customerdetails/:username", component: CustomerdetailsComponent},
  // { path: "maincustomerlist", component: MaincustomerlistComponent},// canActivate: [AuthGuardGuard] },
  { path: "register", component: RegisterComponent},// canActivate: [LoginGuard] },
  { path: "**", redirectTo: '/login', pathMatch: 'full'},// canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
