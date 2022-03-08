export class AttachService {
  private _id: number;
  private _name: string;
  private _unit: string;
  private _unitPrice: number;


  constructor(id: number, name: string, unit: string, unitPrice: number) {
    this._id = id;
    this._name = name;
    this._unit = unit;
    this._unitPrice = unitPrice;
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

  get unit(): string {
    return this._unit;
  }

  set unit(value: string) {
    this._unit = value;
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  set unitPrice(value: number) {
    this._unitPrice = value;
  }
}
