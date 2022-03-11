import {RentType} from './rent-type';
import {AttachService} from './attach-service';

export class Service {
  private _id: number;
  private _name: string;
  private _area: string;
  private _cost: number;
  private _maxPeople: string;
  private _rentType: RentType;
  private _attachService: AttachService;


  constructor(id: number, name: string, area: string, cost: number, maxPeople: string, rentType: RentType, attachService: AttachService, startDate: string, endDate: string, number: number) {
    this._id = id;
    this._name = name;
    this._area = area;
    this._cost = cost;
    this._maxPeople = maxPeople;
    this._rentType = rentType;
    this._attachService = attachService;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get area(): string {
    return this._area;
  }

  set area(value: string) {
    this._area = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get maxPeople(): string {
    return this._maxPeople;
  }

  set maxPeople(value: string) {
    this._maxPeople = value;
  }

  get rentType(): RentType {
    return this._rentType;
  }

  set rentType(value: RentType) {
    this._rentType = value;
  }

  get attachService(): AttachService {
    return this._attachService;
  }

  set attachService(value: AttachService) {
    this._attachService = value;
  }
}
