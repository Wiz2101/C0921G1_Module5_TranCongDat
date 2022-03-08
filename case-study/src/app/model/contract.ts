import {Customer} from './customer';
import {Facility} from './facility';

export class Contract {
  private _id: number;
  private _code: string;
  private _customer: Customer;
  private _facility: Facility;
  private _startDate: string;
  private _endDate: string;
  private _deposit: number;


  constructor(id: number, code: string, customer: Customer, facility: Facility, startDate: string, endDate: string, deposit: number) {
    this._id = id;
    this._code = code;
    this._customer = customer;
    this._facility = facility;
    this._startDate = startDate;
    this._endDate = endDate;
    this._deposit = deposit;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get facility(): Facility {
    return this._facility;
  }

  set facility(value: Facility) {
    this._facility = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get deposit(): number {
    return this._deposit;
  }

  set deposit(value: number) {
    this._deposit = value;
  }
}
