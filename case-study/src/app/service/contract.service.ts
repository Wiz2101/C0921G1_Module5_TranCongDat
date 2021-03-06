import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {AttachService} from '../model/attach-service';
import {RentType} from '../model/rent-type';
import {Service} from '../model/service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  API_URL = 'http://localhost:3000/'
  // public contractList: Contract[] =
  //   [
  //   new Contract(1, 'CT-0001', new Customer(1, 'KH-0001', 'Nguyen Van An', '2000-12-12', 1, '205123123', '0912412123', 'annguyen@gmail.com', new CustomerType(3, 'Gold'), 'Da Nang'), new Service(1, 'Ocean Suite', '85.5', 4500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000), '2022-04-09', '2022-04-10', 2000000),
  //   new Contract(2, 'CT-0002', new Customer(2, 'KH-0002', 'Tran Thi Binh', '1997-02-09', 0, '208121231', '0902123121', 'binhtran@gmail.com', new CustomerType(1, 'Member'), 'Ha Noi'), new Service(5, 'Garden Superior', '40.1', 3000000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000), '2022-04-09', '2022-04-10', 2000000),
  //   new Contract(3, 'CT-0003', new Customer(3, 'KH-0003', 'Tran Van Canh', '1992-12-31', 1, '201212312', '0992212312', 'canhtran@gmail.com', new CustomerType(4, 'Platinum'), 'Da Nang'), new Service(4, 'Lagoon Superior', '40.1', 4500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000), '2022-05-12', '2022-05-15', 4500000),
  //   new Contract(4, 'CT-0004', new Customer(1, 'KH-0004', 'Nguyen Van An', '2000-12-12', 1, '205123123', '0912412123', 'annguyen@gmail.com', new CustomerType(3, 'Gold'), 'Da Nang'), new Service(6, 'Garden Deluxe', '43.7', 3500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000), '2022-03-07', '2022-03-09', 2500000),
  //   new Contract(5, 'CT-0005', new Customer(4, 'KH-0005', 'Bui Cong Danh', '1998-02-28', 1, '201821231', '0912012721', 'danhbui@gmail.com', new CustomerType(3, 'Gold'), 'Hue'), new Service(3, 'Ocean Deluxe', '43.7', 3500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000), '2022-05-07', '2022-05-08', 3000000)
  // ];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL + 'contract');
  }

  findById(id: number): Observable<Contract>{
    return this.httpClient.get<Contract>(this.API_URL + 'contract' + '/' + id);
  }

  save(contract: Contract): Observable<void>{
    return this.httpClient.post<void>(this.API_URL + 'contract', contract);
  }

  update(id: number, contract: Contract): Observable<void>{
    return this.httpClient.patch<void>(this.API_URL + 'contract' + '/' + id, contract);
  }

  deleteById(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.API_URL + 'contract' + '/' + id);
  }
}
