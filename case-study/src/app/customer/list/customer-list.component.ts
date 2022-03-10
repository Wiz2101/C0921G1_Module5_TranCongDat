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
  constructor(private customerService: CustomerService,
              public matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();

  }

  openDialog(id: number) {
    const dialogRef = this.matDialog.open(CustomerDeleteComponent,
      {
        data: this.customerService.findById(id)
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
