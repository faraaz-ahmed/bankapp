import { Component, OnInit } from '@angular/core';
import { CustomerRequest } from 'src/app/customer-request';
import { CustomerRequestService } from 'src/app/customer-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-requests-list',
  templateUrl: './customer-requests-list.component.html',
  styleUrls: ['./customer-requests-list.component.css']
})
export class CustomerRequestsListComponent implements OnInit {

  public customerRequestList: CustomerRequest[];
  public selectedCustomer: CustomerRequest;
  public customerRequest: CustomerRequest;

  constructor(private customerRequestService: CustomerRequestService, private router: Router) {
    this.selectedCustomer = new CustomerRequest("", "", "", "", "", "", "");
  }

  ngOnInit() {
    this.customerRequestService.getCustomerRequestList().subscribe(data => {
      this.customerRequestList = data;
      // this.selectedUsername = '';
      console.log(typeof(data), data);
      console.log(data[0], "meow");
    });
  }

  onClick(customerRequest: CustomerRequest){
    this.selectedCustomer = customerRequest;
    // this.selectedEmp = emp;
    // this.router .navigate(['/customerRequestDetails', customerRequest.username]);
    // console.log(customerRequest);
    // this.customerRequestService.getCustomerRequestList().subscribe(data => {
    //   console.log(typeof(data), data);
    //   for (let i: number = 0; i <= data.length; i++){
    //     if (data[i].username == customerRequest.username){
    //       this.selectedCustomer = data[i];
    //       console.log('yes we got the data !!!!!!' + this.customerRequest);
    //       break;
    //     }
    //   }
    // }); 
    // this.selectedUsername = customerRequest.username;
  }

}
