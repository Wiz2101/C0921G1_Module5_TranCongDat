import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  public facilityList: Facility[];

  constructor(private fa: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityList = this.fa.getAll();
  }
}
