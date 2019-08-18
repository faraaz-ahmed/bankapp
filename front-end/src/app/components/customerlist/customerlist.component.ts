import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/customer-service.service';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  public customerList: Customer[];
  constructor(private customerService: CustomerServiceService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customerList = data;
      console.log(typeof(data), data);
      console.log(data[0], "meow");
    })
  }
  onClick(customer: Customer){
    // this.selectedEmp = emp;
    this.router .navigate(['/customerdetails', customer.username]);
    console.log(customer);
  }

}
