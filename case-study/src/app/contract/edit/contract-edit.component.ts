import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Service} from "../../model/service";
import {Employee} from "../../model/employee";
import {CustomerService} from "../../service/customer.service";
import {ServiceService} from "../../service/service.service";
import {EmployeeService} from "../../service/employee.service";
import {ActivatedRoute} from "@angular/router";
import {ContractService} from "../../service/contract.service";
import {Contract} from "../../model/contract";

@Component({
  selector: 'app-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
  contractFrom: FormGroup;
  customerList: Customer[] = [];
  serviceList: Service[] = [];
  employeeList: Employee[] = [];
  contract = new Contract();

  constructor(private customerService: CustomerService,
              private serviceService: ServiceService,
              private employeeService: EmployeeService,
              private contractService: ContractService,
              private activatedRoute: ActivatedRoute) {
    this.customerService.getAll().subscribe(value => this.customerList = value);
    this.serviceService.getAll().subscribe(value => this.serviceList = value);
    this.employeeService.getAll().subscribe(value => this.employeeList = value);
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.contractService.findById(id).subscribe(value => this.contract = value, error => {
    }, () => this.contractFrom.patchValue(this.contract));
    this.contractFrom = new FormGroup({
        id: new FormControl(this.contract.id),
        code: new FormControl(this.contract.code),
        customer: new FormControl(this.contract.customer),
        service: new FormControl(this.contract.service),
        employee: new FormControl(this.contract.employee),
        startDate: new FormControl(this.contract.startDate),
        endDate: new FormControl(this.contract.endDate),
        deposit: new FormControl(this.contract.deposit)
      }
    )
  }
}
