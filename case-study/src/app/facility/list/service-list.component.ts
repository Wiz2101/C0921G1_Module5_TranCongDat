import {Component, OnInit} from '@angular/core';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';
import {MatDialog} from "@angular/material/dialog";
import {CustomerDeleteComponent} from "../../customer/delete/customer-delete.component";
import {ServiceDeleteComponent} from "../delete/service-delete.component";

@Component({
  selector: 'app-facility-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  public serviceList: Service[] = [];

  constructor(private serviceService: ServiceService,
              public matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.serviceService.getAll().subscribe(value => this.serviceList = value);
  }

  openDialog(id: number){
    const dialogRef = this.matDialog.open(ServiceDeleteComponent,
      {
        data: this.serviceService.findById(id)
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
