import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ServiceService} from "../../service/service.service";
import {EmployeeService} from "../../service/employee.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Service} from "../../model/service";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractFrom: FormGroup;
  customerList: Customer[] = [];
  serviceList: Service[] = [];
  employeeList: Employee[] = [];

  constructor(private customerService: CustomerService,
              private serviceService: ServiceService,
              private employeeService: EmployeeService) {
    this.customerService.getAll().subscribe(value => this.customerList = value);
    this.serviceService.getAll().subscribe(value => this.serviceList = value);
    this.employeeService.getAll().subscribe(value => this.employeeList = value);
  }

  ngOnInit(): void {
    this.contractFrom = new FormGroup({
        code: new FormControl(),
        customer: new FormControl(),
        service: new FormControl(),
        employee: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        deposit: new FormControl()
      }
    )
  }

}
