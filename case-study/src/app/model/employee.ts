import {Education} from './education';
import {Department} from './department';
import {Position} from './position';

export class Employee {
  private _id: number;
  private _name: string;
  private _birthday: string;
  private _idCard: string;
  private _phone: string;
  private _email: string;
  private _education: Education;
  private _position: Position;
  private _salary: number;
  private _department: Department;


  constructor(id: number, name: string, dOB: string, idCard: string, phone: string, email: string, education: Education, position: Position, salary: number, department: Department) {
    this._id = id;
    this._name = name;
    this._birthday = dOB;
    this._idCard = idCard;
    this._phone = phone;
    this._email = email;
    this._education = education;
    this._position = position;
    this._salary = salary;
    this._department = department;
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

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
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

  get education(): Education {
    return this._education;
  }

  set education(value: Education) {
    this._education = value;
  }

  get position(): Position {
    return this._position;
  }

  set position(value: Position) {
    this._position = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get department(): Department {
    return this._department;
  }

  set department(value: Department) {
    this._department = value;
  }
}
