// import { Injectable } from "@angular/core";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductServiceService {
//
//   private apiUrl = 'http://localhost:8080/product';
//
//   constructor(private http: HttpClient) { }
//
//   public getProducts(): Observable<any> {
//     return this.http.get(this.apiUrl);
//
//   }
//
//   // public postProduct(productData: any): Observable<any> {
//   //   return this.http.post(this.apiUrl, JSON.stringify(productData));
//   // }
//
//
//   addProductToSubcategories(productDto: any, subcategoryIds: number[]) {
//     return this.http.post<any>('your_backend_url_here', { productDto, subcategoryIds });
//   }
//   public deleteAllProducts(): Observable<any> {
//     return this.http.delete(this.apiUrl);
//   }
//
//   public updateProductById(productId: string, productData: any): Observable<any> {
//     const updateUrl = `${this.apiUrl}/${productId}`;
//     return this.http.patch(updateUrl, productData);
//   }
//
//   public deleteProductById(productId: string): Observable<any> {
//     const deleteUrl = `${this.apiUrl}/${productId}`;
//     return this.http.delete(deleteUrl);
//   }
//
//   public getProductById(productId: string): Observable<any> {
//     const getUrl = `${this.apiUrl}/${productId}`;
//     return this.http.get(getUrl);
//   }
//
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subcategory} from "../models/subcategory";


@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private baseUrl = 'http://localhost:8080/subcategories'; // Adjust the base URL as necessary

  constructor(private http: HttpClient) { }

  getAll(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Subcategory> {
    return this.http.get<Subcategory>(`${this.baseUrl}/${id}`);
  }

  create(subcategory: Subcategory): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/create`, subcategory);
  }

  update(id: number, subcategory: Subcategory): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, subcategory);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}`);
  }
}
