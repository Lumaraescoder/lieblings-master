import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }


  private handleErrors<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getAllProducts() {
    // let headers = new HttpHeaders().set('content-Type', 'applicatios/json');
    // return this.http.get<Products[]>(this.baseUrl)
    //   .pipe(
    //     // tap(products => console.log(products)),
    //     catchError(this.handleErrors<Products[]>('getHeroes', []))
    //   );
    return this.http.get("https://fakestoreapi.com/products");
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
