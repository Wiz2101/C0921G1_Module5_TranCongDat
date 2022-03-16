import {Product} from './product';

export class Container {
  private _id: number;
  private _code: string;
  private _product: Product;
  private _quantity: number;
  private _importDate: string;
  private _manufactureDate: string;
  private _expiredDate: string;


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

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get importDate(): string {
    return this._importDate;
  }

  set importDate(value: string) {
    this._importDate = value;
  }

  get manufactureDate(): string {
    return this._manufactureDate;
  }

  set manufactureDate(value: string) {
    this._manufactureDate = value;
  }

  get expiredDate(): string {
    return this._expiredDate;
  }

  set expiredDate(value: string) {
    this._expiredDate = value;
  }
}
