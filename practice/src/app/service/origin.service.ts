import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Origin} from '../model/origin';

@Injectable({
  providedIn: 'root'
})
export class OriginService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Origin[]> {
    return this.httpClient.get<Origin[]>(this.API_URL + 'origin');
  }

  findById(id: number): Observable<Origin> {
    return this.httpClient.get<Origin>(this.API_URL + 'origin/' + id);
  }

  save(origin: Origin): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + 'origin', origin);
  }

  edit(origin: Origin): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + 'origin/' + origin.id, origin);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + 'origin/' + id);
  }
}
