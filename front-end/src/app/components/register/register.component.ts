import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service/login-service.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CUSTOMERLIST } from 'src/app/MockCustomer';
import { CustomerServiceService } from 'src/app/customer-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = null

  public customer: Customer;

  // public customerList[]: Customer[];

  userObject = {
    uname: "",
    upass: ""
  }

  confirmPass: string = ""

  constructor(private _loginService: LoginServiceService, private _router: Router, private customerService: CustomerServiceService) {
    this.customer = new Customer("","","","","","","");
  }

  ngOnInit() {
  }

  registerUser() {
    // if (this.userObject.uname.trim() !== "" && this.userObject.upass.trim() !== "" && (this.userObject.upass.trim() === this.confirmPass))
    //   this._loginService.registerUser(this.userObject).subscribe((data) => {
    //     const result = data.body
    //     if (result['status'] === 200) {
    //       this.errorMessage = result['message'];
    //       setTimeout(() => {
    //         this._router.navigate(['/login']);
    //       }, 2000);
    //     }
    //   });

    CUSTOMERLIST.push(this.customer);
    console.log(this.customer);
    if (this.customer.password === this.confirmPass){
      console.log("passwords match");
    }else {
      console.log("passwords do not match");
    }
    this._router.navigate(['/login']);
    

  }
}
