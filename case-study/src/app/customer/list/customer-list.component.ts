import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../delete/customer-delete.component';
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";


@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  p: number = 1;
  public customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  customer: Customer;
  nameSearch: string = '';
  customerTypeSearch = '';
  emailSearch: string = '';

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              public matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => this.customerList = value);
    this.customerTypeService.getAll().subscribe(value => this.customerTypeList = value);
  }


  openDialog(id: number) {
    this.customer = new Customer();
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      const dialogRef = this.matDialog.open(CustomerDeleteComponent,
        {
          data: this.customer
        });
      console.log(this.customer)

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.ngOnInit();
      });
    });
  }

  searchCustomer() {
    this.customerService.searchByOption(this.nameSearch, this.customerTypeSearch, this.emailSearch).subscribe(value => this.customerList = value, error => {
    }, () => this.p = 0)

  }

  getValue($event) {
    this.customerTypeSearch = $event.target.value;
  }
}
