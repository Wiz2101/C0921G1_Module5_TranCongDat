import {Origin} from './origin';

export class Product {
  id: number;
  name: string;
  manufacturer: string;
  origin: Origin;
  unitPrice: number;
  importDate: string;
  stock: number;


  constructor() {
  }
}
