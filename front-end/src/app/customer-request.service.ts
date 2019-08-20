import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { CustomerRequest } from './customer-request';

@Injectable({
  providedIn: 'root'
})


export class CustomerRequestService {

  private url = "assets/images/jsondata/customerRequests.json";
  constructor(private http:HttpClient) { }
  // constructor() { }

  // registerCustomer(customer:Customer){

  // }
  // authenticateLogin(username: String): Observable<Customer[]>{
  //   return this.http.get<Customer[]>(this.url);
  // }

  getCustomerRequestList(): Observable<CustomerRequest[]>{
    return this.http.get<CustomerRequest[]>(this.url);
  }
}
