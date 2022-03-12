import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../service/service.service";
import {RentTypeService} from "../../service/rent-type.service";
import {RentType} from "../../model/rent-type";
import {AttachServiceService} from "../../service/attach-service.service";
import {AttachService} from "../../model/attach-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  serviceForm: FormGroup;
  rentTypeList: RentType[] = [];
  attachServiceList: AttachService[] = [];

  constructor(private serviceService: ServiceService,
              private rentTypeService: RentTypeService,
              private attachServiceService: AttachServiceService,
              private router: Router) {
    this.rentTypeService.getAll().subscribe(value => this.rentTypeList = value);
    this.attachServiceService.getAll().subscribe(value => this.attachServiceList = value);
  }

  ngOnInit(): void {
    this.serviceForm = new FormGroup({
      name: new FormControl('',Validators.required),
      area: new FormControl('',Validators.required),
      cost: new FormControl('',Validators.required),
      maxPeople: new FormControl('',Validators.required),
      rentType: new FormControl('',Validators.required),
      standard: new FormControl('',Validators.required),
      otherDescription: new FormControl('',Validators.required),
      pool: new FormControl('',Validators.required),
      floor: new FormControl('',Validators.required),
      attachService: new FormControl('',Validators.required)
    })
  }

  createService() {
    this.serviceService.save(this.serviceForm.value).subscribe(value => {
    }, error => {
    }, () => this.router.navigateByUrl('/service'));
  }


}
