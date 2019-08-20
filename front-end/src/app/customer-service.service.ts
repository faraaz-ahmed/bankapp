import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CustomerServiceService {

  private url = "assets/images/jsondata/employees.json";
  // private url = 'http://localhost:8182/app';
  constructor(private http:HttpClient) { }
  // constructor() { }

  // registerCustomer(customer:Customer){

  // }
  // authenticateLogin(username: String): Observable<Customer[]>{
  //   return this.http.get<Customer[]>(this.url);
  // }

  getCustomerList(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

  saveCustomer(customer: Customer){
    return this.http.post<any>(this.url + '/customers/registers', customer);
  }
}
