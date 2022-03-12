import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {CustomerDeleteComponent} from '../delete/customer-delete.component';


@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customerList: Customer[];
  customer = new Customer();
  constructor(private customerService: CustomerService,
              public matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => this.customerList = value);

  }

  openDialog(id: number) {

    const dialogRef = this.matDialog.open(CustomerDeleteComponent,
      {
        data: this.customerService.findById(id).subscribe()
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
