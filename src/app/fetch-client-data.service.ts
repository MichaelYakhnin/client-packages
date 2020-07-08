import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class FetchClientDataService {

  constructor(
    private http: HttpClient
  ) {}

  login(identity: number): Observable<any> {
    return this.http.get('/assets/login.json');
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('/assets/clients.json');
  }

}
