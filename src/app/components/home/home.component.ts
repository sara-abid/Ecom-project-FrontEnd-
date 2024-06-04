import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router) {}
Product = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6"]

  // @ViewChild('productContainer') productContainer!: ElementRef;

  clonedProducts: string[] = [];

  ngOnInit() {
    this.createClonedProducts();
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
}

