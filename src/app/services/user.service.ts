import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000/countries';

  constructor(private http: HttpClient) {}

  getAll(User: any): Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }

  get(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  create(User: User) {
    return this.http.post<User>(this.baseUrl, User);
  }

  update(id: string, User: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + '/' + id, User);
  }

  delete(id: string) {
    return this.http.delete<User>(this.baseUrl + '/' + id);
  }
}
