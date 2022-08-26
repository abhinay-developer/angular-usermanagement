import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public loginUser(user:any) {
    return this.http.post(`${environment.URL}users/login`,user);
  }

  constructor(private http: HttpClient) {}

  public getAllUsers() {
    return this.http.get(`${environment.URL}users`);
  }
}
