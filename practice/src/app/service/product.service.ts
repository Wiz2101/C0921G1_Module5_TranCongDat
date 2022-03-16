import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product');
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + 'product/' + id);
  }

  save(product: Product): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + 'product', product);
  }

  edit(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + 'product/' + product.id, product);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + 'product/' + id);
  }

  search(name: string, importDate: string, origin: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product?name_like=' + name + '&importDate_like=' + importDate + '&origin.name_like=' + origin);
  }
}
