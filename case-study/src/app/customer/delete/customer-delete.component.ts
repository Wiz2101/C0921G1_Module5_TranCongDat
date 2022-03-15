import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customer = new Customer();
  constructor(private customerService: CustomerService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: Customer) {
  }

  ngOnInit(): void {
  }

  deleteCustomer(id: number) {

    this.customerService.findById(id).subscribe(value => this.customer = value)
    this.customerService.deleteById(id).subscribe();

    Swal.fire(
      'Deleted!',
      'Delete customer successfully!',
      'success'
    )
  }
}
