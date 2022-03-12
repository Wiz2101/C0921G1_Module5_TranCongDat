import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AttachService} from "../model/attach-service";

@Injectable({
  providedIn: 'root'
})
export class AttachServiceService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AttachService[]>{
    return this.httpClient.get<AttachService[]>(this.API_URL + 'attachService');
  }
}
