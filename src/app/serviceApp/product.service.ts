import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
description: any;
imageUrl: any;
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private products: Product[] = [
    {
      id: 1,
      name: 'Adidas',
      price: 220.00,
      quantity: 10,
      description: undefined,
      imageUrl: undefined
    },
    {
      id: 2,
      name: 'Puma',
      price: 310.00,
      quantity: 2,
      description: undefined,
      imageUrl: undefined
    },
    {
      id: 3,
      name: 'Nike',
      price: 200.00,
      quantity: 2,
      description: undefined,
      imageUrl: undefined
    }
  ];
   cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();


  constructor() { }

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
}