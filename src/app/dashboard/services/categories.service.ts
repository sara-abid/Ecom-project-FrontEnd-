import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Category } from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = 'http://localhost:8080/categories';
  //
  // constructor(private http: HttpClient) { }
  //
  // //
  //
  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  //
  getCategoryById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  //
  createCategory(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }
  //
  updateCategoryById(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }
  //
  deleteCategoryById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  //
  // deleteAllCategories(): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl}`);
  // }

  private apiUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getcategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  addCategory(category: Category): Observable<void> {
    return this.http.post<void>(this.apiUrl, category);
  }

  updateCategory(id: number, category: Category): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteAllCategories(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }


}

