import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceApp } from 'src/app/service-App/product.service';
import { CartService } from 'src/app/serviceApp/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // achraf
  constructor(private router:Router,private productService: ProductServiceApp, private cartService: CartService) {}
Product = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6"]
// achraf
errorMessage: string = '';

// achraf
products: any = [];
  newProduct: { price: number; imageDto: null; description: string; productName: string } = { productName: '', description: '', price: 0, imageDto: null };
  // @ViewChild('productContainer') productContainer!: ElementRef;

  clonedProducts: string[] = [];

  ngOnInit() {
    this.createClonedProducts();
    this.getAllProducts();
  }
// achraf
  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
        console.log(data);
        
      },
      error => {
        this.handleError(error);
      }
    );
  }
// achraf
  private handleError(error: any) {
    console.error('An error occurred:', error);
    this.errorMessage = error;
  }


    

  createClonedProducts() {
    const clonedProductsCount = 4;
    for (let i = 0; i < clonedProductsCount; i++) {
      this.clonedProducts.push(...this.Product);
    }
  }

  toShopClick() {
    this.router.navigate (['/shop'])
  }

  toBlogClick() {
    this.router.navigate (['/blog'])
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    // this.toastrService.success("Product added ")
  }
}
