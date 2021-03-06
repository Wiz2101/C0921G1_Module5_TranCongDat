import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {Service} from '../model/service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/';
  // customerList: Customer[] = [];
  // customerType: CustomerType[] = [];

  constructor(private httpClient: HttpClient) {
  }

  //
  // getAllCustomerType() {
  //   this.customerType.push(new CustomerType(1, 'Member'));
  //   this.customerType.push(new CustomerType(2, 'Silver'));
  //   this.customerType.push(new CustomerType(2, 'Gold'));
  //   this.customerType.push(new CustomerType(2, 'Platinum'));
  //   this.customerType.push(new CustomerType(2, 'Diamond'));
  //   return this.customerType;
  // }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customer');
    // this.customerList.push(new Customer(1, 'KH-0001', 'Nguyen Van An', '2000-12-12', 1, '205123123', '0912412123', 'annguyen@gmail.com', new CustomerType(3, 'Gold'), 'Da Nang'));
    // this.customerList.push(new Customer(2, 'KH-0002', 'Tran Thi Binh', '1997-02-09', 0, '208121231', '0902123121', 'binhtran@gmail.com', new CustomerType(1, 'Member'), 'Ha Noi'));
    // this.customerList.push(new Customer(3, 'KH-0003', 'Tran Van Canh', '1992-12-31', 1, '201212312', '0992212312', 'canhtran@gmail.com', new CustomerType(4, 'Platinum'), 'Da Nang'));
    // this.customerList.push(new Customer(4, 'KH-0004', 'Bui Cong Danh', '1998-02-28', 1, '201821231', '0912012721', 'danhbui@gmail.com', new CustomerType(3, 'Gold'), 'Hue'));
    // this.customerList.push(new Customer(5, 'KH-0005', 'Nguyen Thi Em', '1997-08-12', 0, '207512313', '0912691215', 'emnguyen@gmail.com', new CustomerType(2, 'Silver'), 'Quang Binh'));
    // return this.customerList;
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + 'customer' + '/' + id);
  }

  save(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + 'customer', customer);
  }

  update(id: number, customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + 'customer' + '/' + id, customer);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + 'customer' + '/' + id);
  }

  searchByOption(name: string, customerType: string, email: string):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL + 'customer' + '?' + 'name_like=' + name + '&' + 'customerType.name_like=' + customerType + '&' + 'email_like=' + email);
  }
}
