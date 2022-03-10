import {CustomerType} from './customer-type';

export class Customer{
  private _id: number;
  private _code: string;
  private _name: string;
  private _dOB: string;
  private _gender: number;
  private _idCard: string;
  private _phone: string;
  private _email: string;
  private _customerType: CustomerType;
  private _address: string;


  constructor(id: number, code: string, name: string, dOB: string, gender: number, idCard: string, phone: string, email: string, customerType: CustomerType, address: string) {
    this._id = id;
    this._code = code;
    this._name = name;
    this._dOB = dOB;
    this._gender = gender;
    this._idCard = idCard;
    this._phone = phone;
    this._email = email;
    this._customerType = customerType;
    this._address = address;
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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dOB(): string {
    return this._dOB;
  }

  set dOB(value: string) {
    this._dOB = value;
  }

  get gender(): number {
    return this._gender;
  }

  set gender(value: number) {
    this._gender = value;
  }

  get idCard(): string {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get customerType(): CustomerType {
    return this._customerType;
  }

  set customerType(value: CustomerType) {
    this._customerType = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
