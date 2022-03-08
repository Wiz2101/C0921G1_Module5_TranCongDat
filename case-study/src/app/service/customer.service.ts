import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor() {
  }

  getAll() {
    this.customerList.push(new Customer(1, 'Nguyen Van An', '2000-12-12', 1, '205123123', '0912412123', 'annguyen@gmail.com', new CustomerType(3, 'Gold'), 'Da Nang'));
    this.customerList.push(new Customer(2, 'Tran Thi Binh', '1997-02-09', 0, '208121231', '0902123121', 'binhtran@gmail.com', new CustomerType(1, 'Member'), 'Ha Noi'));
    this.customerList.push(new Customer(3, 'Tran Van Canh', '1992-12-31', 1, '201212312', '0992212312', 'canhtran@gmail.com', new CustomerType(4, 'Platinum'), 'Da Nang'));
    this.customerList.push(new Customer(4, 'Bui Cong Danh', '1998-02-28', 1, '201821231', '0912012721', 'danhbui@gmail.com', new CustomerType(3, 'Gold'), 'Hue'));
    this.customerList.push(new Customer(5, 'Nguyen Thi Em', '1997-08-12', 0, '207512313', '0912691215', 'emnguyen@gmail.com', new CustomerType(2, 'Silver'), 'Quang Binh'));
    return this.customerList;
  }
}
