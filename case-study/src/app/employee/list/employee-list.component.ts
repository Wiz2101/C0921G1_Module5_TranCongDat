import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Employee[];

  constructor() {
  }

  ngOnInit(): void {
    this.employeeList = [];
    this.employeeList.push(new Employee(1, 'Nguyen Van An', '2000-12-12', '205123123', '0912412123', 'annguyen@gmail.com', 'University', 'Receptionist', 7000000));
    this.employeeList.push(new Employee(2, 'Tran Thi Binh', '1997-02-09', '208121231', '0902123121', 'binhtran@gmail.com', 'College', 'Waitress', 4500000));
    this.employeeList.push(new Employee(3, 'Tran Van Canh', '1992-12-31', '201212312', '0992212312', 'canhtran@gmail.com', 'After Graduated', 'Executive', 7500000));
    this.employeeList.push(new Employee(4, 'Bui Cong Danh', '1998-02-28', '201821231', '0912012721', 'danhbui@gmail.com', 'University', 'Manager', 12000000));
    this.employeeList.push(new Employee(5, 'Nguyen Thi Em', '1997-08-12', '207512313', '0912691215', 'emnguyen@gmail.com', 'After Graduated', 'Director', 20000000));
  }

}
