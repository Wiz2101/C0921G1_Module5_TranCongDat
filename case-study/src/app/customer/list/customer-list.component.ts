import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../icustomer';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customerList: Customer[];

  constructor(private cu: CustomerService) {
  }

  ngOnInit(): void {
    this.customerList = this.cu.getAll();
    console.log(this.customerList);
  }
}
