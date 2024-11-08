import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post('http://localhost:8081/inscription', userData);
  }
  login(credentials: any): Observable<any> {
    return this.http.post('http://localhost:8081/connexion', credentials);
  }
}
