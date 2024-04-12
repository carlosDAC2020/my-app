import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000//login/', { username, password });
  }

  register(username: string, password: string, firstName: string, lastName: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000//register/', { username, password, first_name: firstName, last_name: lastName });
  }
}
