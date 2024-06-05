import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);
  cart$ = this.cartSubject.asObservable();
  private productAddedSubject = new BehaviorSubject<boolean>(false);
  productAdded$ = this.productAddedSubject.asObservable();

  addToCart(product: Product): void {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cart);
    this.productAddedSubject.next(true);  // Notify that a product has been added
  }

  updateQuantity(productId: number, quantity: number): void {
    const product = this.cart.find(p => p.id === productId);
    if (product) {
      product.quantity = quantity;
      if (product.quantity <= 0) {
        this.removeProduct(productId);
      } else {
        this.cartSubject.next(this.cart);
      }
    }
  }

  removeProduct(productId: number): void {
    this.cart = this.cart.filter(p => p.id !== productId);
    this.cartSubject.next(this.cart);
  }

  getCart(): Product[] {
    return this.cart;
  }
}
