import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  public contractList: Contract[];

  constructor() {
  }

  ngOnInit(): void {
    this.contractList = [];
    this.contractList.push(new Contract(1, 'CT-0001', 'Nguyen Van An', 'Ocean Suite', '2022-03-07', '2022-03-09', 5000000));
    this.contractList.push(new Contract(2, 'CT-0002', 'Tran Thi Binh', 'Garden Superior', '2022-04-09', '2022-04-10', 2000000));
    this.contractList.push(new Contract(3, 'CT-0003', 'Tran Van Canh', 'Lagoon Superior', '2022-05-12', '2022-05-15', 4500000));
    this.contractList.push(new Contract(4, 'CT-0004', 'Nguyen Van An', 'Garden Deluxe', '2022-03-07', '2022-03-09', 2500000));
    this.contractList.push(new Contract(5, 'CT-0005', 'Bui Cong Danh', 'Ocean Deluxe', '2022-05-07', '2022-05-08', 3000000));
  }

}
