import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  login(email: string, password: string): Observable<string> {
    throw new Error('not implemented');
  }
}
