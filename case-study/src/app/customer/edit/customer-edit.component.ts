import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';
import {CustomerTypeService} from "../../service/customer-type.service";
import {Contract} from "../../model/contract";
import {Customer} from "../../model/customer";
import {log} from "util";

@Component({
  selector: 'app-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();
  customerTypeList: CustomerType[] = [];
  service: Service[] = [];
  today = new Date();

  constructor(private customerService: CustomerService,
              private serviceService: ServiceService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => this.customerTypeList = value);
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      console.log(this.customer);
    }, error => {
    }, () => this.customerForm.patchValue(this.customer));

    this.customerForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(\\(84\\)\\+90|\\(84\\)\\+91|090|091)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', Validators.required)
    });
  }

  updateCustomer() {
    if (this.customerForm.invalid) {
      this.ngOnInit();
    } else {
      const customerUpdate = this.customerForm.value;
      customerUpdate.id = this.customer.id;
      this.customerService.update(customerUpdate.id, customerUpdate).subscribe(value => {
      }, error => {
      }, () => this.router.navigateByUrl('/customer/list', { skipLocationChange: false }));
    }
  }

  backToList(){
    this.ngOnInit();
  }
}
