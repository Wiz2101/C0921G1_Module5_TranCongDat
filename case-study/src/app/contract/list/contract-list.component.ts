import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  public contractList: Contract[];

  constructor(private co: ContractService) {
  }

  ngOnInit(): void {
    this.contractList = this.co.getAll();
  }

}
