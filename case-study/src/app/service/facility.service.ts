import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {AttachService} from '../model/attach-service';
import {RentType} from '../model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  public facilityList: Facility[] = [
    new Facility(1, 'Ocean Suite', '85.5', 4500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(2, 'Ocean Studio Suite', '40.1', 6000000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(3, 'Ocean Deluxe', '43.7', 3500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(4, 'Lagoon Superior', '40.1', 4500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(5, 'Garden Superior', '40.1', 3000000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(6, 'Garden Deluxe', '43.7', 3500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(7, 'President Suite', '130', 8500000, '2', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(8, 'Beach Front Villa', '900', 15000000, '4', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000),
    new Facility(9, 'Pool Villa', '320', 10000000, '4', new RentType(1, 'Day'), new AttachService(1, 'Massage', 'Hour', 450000), '2022-03-07', '2022-03-09', 5000000)
  ];

  constructor() {
  }

  getAll() {
    return this.facilityList;
  }
}
