import { Injectable } from '@angular/core';
import { Accounts } from './accounts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private url = "assets/images/jsondata/accounts.json";
  constructor(private http:HttpClient) { }
  // constructor() { }

  // registerCustomer(customer:Customer){

  // }
  // authenticateLogin(username: String): Observable<Customer[]>{
  //   return this.http.get<Customer[]>(this.url);
  // }

  getAccountsList(): Observable<Accounts[]>{
    return this.http.get<Accounts[]>(this.url);
  }
}
