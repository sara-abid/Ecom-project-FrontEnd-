import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
export class ProductService {

  
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
