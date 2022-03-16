import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Container} from '../model/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Container[]> {
    return this.httpClient.get<Container[]>(this.API_URL + 'container');
  }

  save(container: Container): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + 'container', container);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + 'container/' + id);
  }

  getById(id: number): Observable<Container> {
    return this.httpClient.get<Container>(this.API_URL + 'container/' + id);
  }

  searchByOption(product: string): Observable<Container[]> {
    return this.httpClient.get<Container[]>(this.API_URL + 'container?product.name_like=' + product);
  }
}
