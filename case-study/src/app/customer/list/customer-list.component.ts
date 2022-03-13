import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {CustomerDeleteComponent} from '../delete/customer-delete.component';
import {log} from "util";


@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customerList: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService,
              public matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => this.customerList = value);
  }

  openDialog(id: number) {
    this.customer = new Customer();
    this.customerService.findById(id).subscribe(value => this.customer = value);

    const dialogRef = this.matDialog.open(CustomerDeleteComponent,
      {
        data: this.customer
      });
    console.log(this.customer)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
