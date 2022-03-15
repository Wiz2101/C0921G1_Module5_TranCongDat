import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  service: Service[] = [];

  today = new Date();

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => this.customerTypeList = value);
    this.customerForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('\\+84\\d{9}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', Validators.required),
    });
  }

  createCustomer() {
    if (this.customerForm.invalid) {
      this.ngOnInit();
    } else {
      this.customerService.save(this.customerForm.value).subscribe();
    }
  }
}
