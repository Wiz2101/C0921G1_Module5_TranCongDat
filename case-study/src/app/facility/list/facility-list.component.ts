import {Component, OnInit} from '@angular/core';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  public facilityList: Service[];

  constructor(private fa: ServiceService) {
  }

  ngOnInit(): void {
    this.facilityList = this.fa.getAll();
  }
}
