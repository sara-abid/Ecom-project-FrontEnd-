import { Component,OnInit } from '@angular/core';
import { Product, ProductService} from 'src/app/service/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];
  subtotal: number = 0;
  shipping: number = 4.99;
  total: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.calculateTotal();
  }

  calculateTotal() {
    this.subtotal = this.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    this.total = this.subtotal + this.shipping;
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity < 1) return;
    this.productService.updateQuantity(productId, quantity);
    this.calculateTotal();
  }

  removeProduct(productId: number) {
    this.productService.removeProduct(productId);
    this.products = this.productService.getProducts();
    this.calculateTotal();
  }
}
