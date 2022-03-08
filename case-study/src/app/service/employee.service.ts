import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';
import {Education} from '../model/education';
import {Position} from '../model/position';
import {Department} from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employeeList: Employee[] = [
    new Employee(1, 'Nguyen Van An', '2000-12-12', '205123123', '0912412123', 'annguyen@gmail.com', new Education(1, 'University'), new Position(1, 'Receptionist'), 7000000, new Department(1, 'Service')),
    new Employee(2, 'Tran Thi Binh', '1997-02-09', '208121231', '0902123121', 'binhtran@gmail.com', new Education(2, 'College'), new Position(2, 'Waitress'), 4500000, new Department(1, 'Service')),
    new Employee(3, 'Tran Van Canh', '1992-12-31', '201212312', '0992212312', 'canhtran@gmail.com', new Education(3, 'After Graduated'), new Position(3, 'Executive'), 7500000, new Department(2, 'Sale-Marketing')),
    new Employee(4, 'Bui Cong Danh', '1998-02-28', '201821231', '0912012721', 'danhbui@gmail.com', new Education(1, 'University'), new Position(4, 'Manager'), 12000000, new Department(3, 'Management')),
    new Employee(5, 'Nguyen Thi Em', '1997-08-12', '207512313', '0912691215', 'emnguyen@gmail.com', new Education(3, 'After Graduated'), new Position(5, 'Director'), 20000000, new Department(3, 'Management'))
  ];

  constructor() {
  }

  getAll() {
    return this.employeeList;
  }
}
