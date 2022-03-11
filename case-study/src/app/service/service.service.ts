import {Injectable} from '@angular/core';
import {Service} from '../model/service';
import {AttachService} from '../model/attach-service';
import {RentType} from '../model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public facilityList: Service[] = [
    new Service(1, 'Ocean Suite', '85.5', 4500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(2, 'Ocean Studio Suite', '40.1', 6000000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(3, 'Ocean Deluxe', '43.7', 3500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(4, 'Lagoon Superior', '40.1', 4500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(5, 'Garden Superior', '40.1', 3000000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(6, 'Garden Deluxe', '43.7', 3500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(7, 'President Suite', '130', 8500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(8, 'Beach Front Villa', '900', 15000000, '4', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Service(9, 'Pool Villa', '320', 10000000, '4', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000)
  ];

  constructor() {
  }

  getAll() {
    return this.facilityList;
  }
}
