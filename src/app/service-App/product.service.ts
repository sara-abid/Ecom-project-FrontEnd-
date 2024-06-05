import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceApp {
  private apiUrl = 'http://localhost:8080/product';
  constructor(private http:HttpClient){
  }

  private products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Max 2019',
      size: '36EU - 4US',
      price: 259.00,
      quantity: 2,
      imageUrl: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      name: 'Nike Air Max 2019',
      size: '36EU - 4US',
      price: 259.00,
      quantity: 2,
      imageUrl: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80'

    },
    {
      id: 3,
      name: 'Nike Air Max 2019',
      size: '36EU - 4US',
      price: 259.00,
      quantity: 2,
      imageUrl: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80'
    }
  ];
   cartSubject = new BehaviorSubject<Product[]>(this.products);
  cart$ = this.cartSubject.asObservable();



  getProducts(): Product[] {
    return this.products;
  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.quantity = quantity;
    }
    this.cartSubject.next(this.products);
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
    this.cartSubject.next(this.products);
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }


}
