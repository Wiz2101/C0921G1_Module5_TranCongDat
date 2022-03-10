import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  constructor(private customerService: CustomerService,
              @Inject(MAT_DIALOG_DATA) public data: Customer) { }

  ngOnInit(): void {
  }

  deleteCustomer(id: number){
    this.customerService.deleteById(id);
  }
}
