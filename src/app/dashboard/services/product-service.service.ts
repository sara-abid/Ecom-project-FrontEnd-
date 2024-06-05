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
//   // public getProducts(): Observable<any> {
//   //   return this.http.get(this.apiUrl);
//   //
//   // }
//
//   // public postProduct(productData: any): Observable<any> {
//   //   return this.http.post(this.apiUrl, JSON.stringify(productData));
//   // }
//
//
//   addProductToSubcategories(productDto: any, subcategoryIds: number[]) {
//     return this.http.post<any>('apiUrl', { productDto, subcategoryIds });
//   }
// //   public deleteAllProducts(): Observable<any> {
// //     return this.http.delete(this.apiUrl);
// //   }
// //
// //   public updateProductById(productId: string, productData: any): Observable<any> {
// //     const updateUrl = `${this.apiUrl}/${productId}`;
// //     return this.http.patch(updateUrl, productData);
// //   }
// //
// //   public deleteProductById(productId: string): Observable<any> {
// //     const deleteUrl = `${this.apiUrl}/${productId}`;
// //     return this.http.delete(deleteUrl);
// //   }
// //
// //   public getProductById(productId: string): Observable<any> {
// //     const getUrl = `${this.apiUrl}/${productId}`;
// //     return this.http.get(getUrl);
// //   }
// //
// }
//
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import {Product} from "../models/product";
// //
// //
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class ProductService {
// //   private apiUrl = 'http://your-api-endpoint.com/products';
// //
// //   constructor(private http: HttpClient) {}
// //
// //   getAllProducts(): Observable<Product[]> {
// //     return this.http.get<Product[]>(this.apiUrl);
// //   }
// //
// //   getProductById(id: number): Observable<Product> {
// //     return this.http.get<Product>(`${this.apiUrl}/${id}`);
// //   }
// //
// //   addProductToSubcategories(
// //     productDto: { price: number; imageDto: null; subcategoryIds: any[]; description: string; productName: string },
// //     subcategoryIds: number[]
// //   ): Observable<any> {
// //     const formData = new FormData();
// //     formData.append('productName', productDto.productName);
// //     formData.append('description', productDto.description);
// //     formData.append('price', productDto.price.toString());
// //     formData.append('imageDto', productDto.imageDto);
// //     subcategoryIds.forEach((id) => {
// //       formData.append('subcategoryId', id.toString());
// //     });
// //
// //     return this.http.post(this.apiUrl, formData);
// //   }
// //
// //   deleteProduct(id: number): Observable<any> {
// //     return this.http.delete(`${this.apiUrl}/${id}`);
// //   }
// //
// //   updateProduct(id: number, product: Product): Observable<Product> {
// //     return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
// //   }
// // }


import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Product} from "../models/product";


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }


  addProductToSubcategories(product: {
    price: number;
    imageDto: null;
    description: string;
    productName: string
  }, subcategoryIds: number[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('productName', product.productName);
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('imageDto', product.imageDto);

    const params = new HttpParams().set('subcategoryId', subcategoryIds.join(','));

    return this.http.post<any>(this.apiUrl, formData, { params })
      .pipe(
        catchError(this.handleError)
      );
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

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProduct(id: number, updatedProduct: Product): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('productName', updatedProduct.productName);
    formData.append('description', updatedProduct.description);
    formData.append('price', updatedProduct.price.toString());
    if (updatedProduct.imageDto) {
      formData.append('imageDto', updatedProduct.imageDto);
    }

    return this.http.put<any>(`${this.apiUrl}/${id}`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }


  // ____________________________________________________________________________________________
  public getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);

  }

  public postProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(productData));
  }

  public deleteAllProducts(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  public updateProductById(productId: string, productData: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/product/${productId}`;
    return this.http.patch(updateUrl, productData);
  }

  public deleteProductById(productId: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/product/${productId}`;
    return this.http.delete(deleteUrl);
  }

  // public getProductById(productId: string): Observable<any> {
  //   const getUrl = `${this.apiUrl}/product/${productId}`;
  //   return this.http.get(getUrl);
  // }

}
