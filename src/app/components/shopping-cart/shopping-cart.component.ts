import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/serviceApp/cart.service";
import { Product } from "src/app/serviceApp/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: Product[] = [];
  subtotal: number = 0;
  shipping: number = 4.99;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.subtotal = this.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    this.total = this.subtotal + this.shipping;
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) return; // Prevent negative quantities
    this.cartService.updateQuantity(productId, quantity);
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  removeProduct(productId: number): void {
    this.cartService.removeProduct(productId);
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }
}
