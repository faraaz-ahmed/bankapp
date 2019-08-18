import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginServiceService } from 'src/app/services/login-service/login-service.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public customer: Customer;
  public username: String;

  tfaFlag: boolean = false
  userObject = {
    uname: "",
    upass: ""
  }
  errorMessage: string = null
  constructor(private _loginService: LoginServiceService, private _router: Router) {
    this.username = '';
    this.customer = new Customer('', '', '', '', '', '','');
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
  this._router.navigate(['/customerlist']);
  }

}
