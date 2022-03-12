import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Department} from "../model/department";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.API_URL + 'department');
  }
}
