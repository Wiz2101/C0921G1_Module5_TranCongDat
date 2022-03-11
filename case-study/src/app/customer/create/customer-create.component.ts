import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerCreate: FormGroup;
  customerType: CustomerType[] = [];
  service: Service[] = [];

  today = new Date();
  constructor(private cs: CustomerService, private fa: ServiceService) {
  }

  ngOnInit(): void {
    this.customerType = this.cs.getAllCustomerType();
    this.service = this.fa.getAll();
    this.customerCreate = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('',[Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(\\(84\\)\\+90|\\(84\\)\\+91|090|091)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required)
    });
  }

  createCustomer(){
    console.log(this.customerCreate.value);
  }
}
