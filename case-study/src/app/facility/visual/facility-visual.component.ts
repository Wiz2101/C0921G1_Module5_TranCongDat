import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {Service} from "../../model/service";

@Component({
  selector: 'app-list',
  templateUrl: './facility-visual.component.html',
  styleUrls: ['./facility-visual.component.css']
})
export class FacilityVisualComponent implements OnInit {
  serviceList: Service[] = [];
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAll().subscribe(value => this.serviceList = value);
    console.log(this.serviceList)
  }

}
