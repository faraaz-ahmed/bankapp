import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
import { LoginServiceService } from 'src/app/services/login-service/login-service.service';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public customer: Customer;
  public username: String;
  public password: String;
  public uid: String;

  tfaFlag: boolean = false
  userObject = {
    uname: "",
    upass: ""
  }
  errorMessage: string = null
  constructor(private _loginService: LoginServiceService, private _router: Router, private _login: AccountsService) {
    this.username = '';
    this.customer = new Customer(0, '', '', '', '', '', '','');
  }

  ngOnInit() {
  }

  loginUser() {
    
  //   this._loginService.loginAuth(this.userObject).subscribe((data) => {
  //     this.errorMessage = null;
  //     if (data.body['status'] === 200) {
  //       this._loginService.updateAuthStatus(true);
  //       this._router.navigate(['/customerlist' + this.customer.username]);
  //     }
  //     if (data.body['status'] === 206) {
  //       this.tfaFlag = true;
  //     }
  //     if (data.body['status'] === 403) {
  //       this.errorMessage = data.body['message'];
  //     }
  //     if (data.body['status'] === 404) {
  //       this.errorMessage = data.body['message'];
  //     }
  //   })


  //abrar code for login
  // this._login.loginAccount(this.customer).subscribe((data)=>{
  //   console.log(data.message);
  //   this.uid=data.message;
  //   if(data.status=="Success"){
  //     this._router.navigate(['/user', this.uid]);
  //   }
  //   else{
  //     this.errorMessage="Invalid Credentials";
  //     console.log("Invalid Credentials");
  //   }
  // });
  if(this.customer.username == "faraaz" && this.customer.password == "password"){
    this._router.navigate(['/customerlist']);
  } else{
    this.errorMessage = 'Invalid Credentials';
  }
  
  }
}
