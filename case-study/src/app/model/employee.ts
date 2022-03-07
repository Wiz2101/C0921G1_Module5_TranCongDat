export class Employee {
  private _id: number;
  private _name: string;
  private _dOB: string;
  private _idCard: string;
  private _phone: string;
  private _email: string;
  private _education: string;
  private _position: string;
  private _salary: number;


  constructor(id: number, name: string, dOB: string, idCard: string, phone: string, email: string, education: string, position: string, salary: number) {
    this._id = id;
    this._name = name;
    this._dOB = dOB;
    this._idCard = idCard;
    this._phone = phone;
    this._email = email;
    this._education = education;
    this._position = position;
    this._salary = salary;
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

  get dOB(): string {
    return this._dOB;
  }

  set dOB(value: string) {
    this._dOB = value;
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

  get education(): string {
    return this._education;
  }

  set education(value: string) {
    this._education = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }
}
