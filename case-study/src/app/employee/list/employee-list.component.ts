import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Customer} from '../../model/customer';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Employee[];

  constructor(private em: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeList = this.em.getAll();
  }

}
