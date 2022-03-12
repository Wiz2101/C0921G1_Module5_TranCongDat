import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Position} from "../model/position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.API_URL + 'position');
  }
}
