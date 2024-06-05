import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = 'http://localhost:3000/api/v1/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getCategoryById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createCategory(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  updateCategoryById(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  deleteCategoryById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  deleteAllCategories(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}`);
  }

}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import {Category} from "../models/category";
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CategoriesService {
//   private apiUrl = 'http://localhost:8080/categories'; // Replace with your backend API endpoint
//
//   constructor(private http: HttpClient) { }
//
//   // Get all categories
//   getAllCategories(): Observable<Category[]> {
//     return this.http.get<Category[]>(this.apiUrl);
//   }
//
//   // Get a category by ID
//   getCategoryById(id: number): Observable<Category> {
//     return this.http.get<Category>(`${this.apiUrl}/${id}`);
//   }
//
//   // Create a new category
//   createCategory(category: Category): Observable<Category> {
//     return this.http.post<Category>(this.apiUrl, category);
//   }
//
//   // Update a category
//   updateCategory(id: number, category: Category): Observable<Category> {
//     return this.http.put<Category>(`${this.apiUrl}/${id}`, category);
//   }
//
//   // Delete a category
//   deleteCategory(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }
