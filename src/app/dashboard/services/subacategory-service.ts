

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
  //
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
