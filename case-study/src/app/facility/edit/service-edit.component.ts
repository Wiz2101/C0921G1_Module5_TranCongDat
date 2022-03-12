import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../service/service.service";
import {RentTypeService} from "../../service/rent-type.service";
import {AttachServiceService} from "../../service/attach-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RentType} from "../../model/rent-type";
import {AttachService} from "../../model/attach-service";
import {Service} from "../../model/service";

@Component({
  selector: 'app-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  serviceForm: FormGroup;
  service = new Service();
  rentTypeList: RentType[] = [];
  attachServiceList: AttachService[] = [];

  constructor(private serviceService: ServiceService,
              private rentTypeService: RentTypeService,
              private attachServiceService: AttachServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.rentTypeService.getAll().subscribe(value => this.rentTypeList = value);
    this.attachServiceService.getAll().subscribe(value => this.attachServiceList = value);
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.serviceService.findById(id).subscribe(value => this.service = value, error => {
    }, () => {
      this.serviceForm.patchValue(this.service)
    })
    this.serviceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      rentType: new FormControl('', Validators.required),
      standard: new FormControl('', Validators.required),
      otherDescription: new FormControl('', Validators.required),
      pool: new FormControl('', Validators.required),
      floor: new FormControl('', Validators.required),
      attachService: new FormControl('', Validators.required)
    })
  }

  updateService() {
    const serviceUpdate = this.serviceForm.value;
    serviceUpdate.id = this.service.id;
    this.serviceService.update(serviceUpdate.id, serviceUpdate).subscribe(value => {
    }, error => {
    }, () => {
      this.router.navigateByUrl('/service')
    })
  }

}
