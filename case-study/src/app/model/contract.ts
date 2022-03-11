import {Customer} from './customer';
import {Service} from './service';
import {Employee} from './employee';

export class Contract {
  private _id: number;
  private _code: string;
  private _customer: Customer;
  private _service: Service;
  private _employee: Employee;
  private _startDate: string;
  private _endDate: string;
  private _deposit: number;


  constructor() {
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

  get service(): Service {
    return this._service;
  }

  set service(value: Service) {
    this._service = value;
  }

  get employee(): Employee {
    return this._employee;
  }

  set employee(value: Employee) {
    this._employee = value;
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
