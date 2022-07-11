import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://fakestoreapi.com/auth/login';
  }

  authenticateUser(data) {
    return this.http.post(this.url, data)
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<any> {
    return this.http.post(this.url, {}, {
      headers: { Authorization: 'Bearer ' + token }
    }).pipe(map(res => res['isAuthenticated'])).toPromise();
  }
}
