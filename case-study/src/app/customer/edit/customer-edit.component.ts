import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEdit: FormGroup;
  customerType: CustomerType[] = [];
  service: Facility[] = [];
  today = new Date();

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    const customer = this.customerService.findById(id);
    this.customerType = this.customerService.getAllCustomerType();
    this.service = this.facilityService.getAll();
    this.customerEdit = new FormGroup({
      id: new FormControl(customer.id),
      code: new FormControl(customer.code, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl(customer.name, Validators.required),
      birthday: new FormControl(customer.dOB, Validators.required),
      gender: new FormControl(customer.gender, Validators.required),
      idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
      phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(\\(84\\)\\+90|\\(84\\)\\+91|090|091)\\d{7}$')]),
      email: new FormControl(customer.email, [Validators.required, Validators.email]),
      customerType: new FormControl(customer.customerType.name, Validators.required)
      // service: new FormControl(, Validators.required)
    });
  }

  editCustomer(){
    this.customerService.updateCustomer(this.customerEdit.value);
    this.router.navigateByUrl('/customer/list')
  }
}
