import { Injectable } from '@angular/core';
import { Product } from './product.service';  // Ensure you have this interface defined correctly

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    let item = this.cart.find(item => item.name === product.name);
    if (item) {
      item.quantity += 1;  // Assuming each product has a 'quantity' property
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(item => item.name !== product.name);
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

