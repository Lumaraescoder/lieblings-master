import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:8000/countries';

  constructor(private http: HttpClient) {}

  getAll(course: any): Observable<Products> {
    return this.http.get<Products>(this.baseUrl + '/');
  }

  get(id: string): Observable<Products> {
    return this.http.get<Products>(this.baseUrl + '/' + id);
  }

  create(Products: Products) {
    return this.http.post<Products>(this.baseUrl, Products);
  }

  update(id: string, Products: Products): Observable<Products> {
    return this.http.put<Products>(this.baseUrl + '/' + id, Products);
  }

  delete(id: string) {
    return this.http.delete<Products>(this.baseUrl + '/' + id);
  }
}
