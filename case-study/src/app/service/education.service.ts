import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Education} from "../model/education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.API_URL + 'education');
  }
}
