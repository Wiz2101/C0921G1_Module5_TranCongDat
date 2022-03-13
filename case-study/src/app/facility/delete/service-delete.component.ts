import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Customer} from "../../model/customer";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.css']
})
export class ServiceDeleteComponent implements OnInit {

  constructor(private serviceService: ServiceService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: Customer) { }

  ngOnInit(): void {
  }

  deleteService(id: number) {
    this.serviceService.deleteById(id).subscribe();
    this.router.navigateByUrl('/customer');
  }

}
