import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../icustomer';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customerList: ICustomer[];

  constructor() {
  }

  ngOnInit(): void {
    this.customerList = [];
    this.customerList.push(new Customer(1, 'Nguyen Van An', '2000-12-12', 1, '205123123', '0912412123', 'annguyen@gmail.com', 'Gold', 'Da Nang'));
    this.customerList.push(new Customer(2, 'Tran Thi Binh', '1997-02-09', 0, '208121231', '0902123121', 'binhtran@gmail.com', 'Member', 'Ha Noi'));
    this.customerList.push(new Customer(3, 'Tran Van Canh', '1992-12-31', 1, '201212312', '0992212312', 'canhtran@gmail.com', 'Platinum', 'Da Nang'));
    this.customerList.push(new Customer(4, 'Bui Cong Danh', '1998-02-28', 1, '201821231', '0912012721', 'danhbui@gmail.com', 'Gold', 'Hue'));
    this.customerList.push(new Customer(5, 'Nguyen Thi Em', '1997-08-12', 0, '207512313', '0912691215', 'emnguyen@gmail.com', 'Silver', 'Quang Binh'));
  }

}
