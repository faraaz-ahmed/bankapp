import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CustomerServiceService {

  private url = "assets/images/jsondata/employees.json"
  constructor(private http:HttpClient) { }
  // constructor() { }
  getCustomerList(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

}
