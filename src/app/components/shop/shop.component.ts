import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/serviceApp/product.service';
import { CartService } from 'src/app/serviceApp/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  homeOpen = false;
  beautyOpen = false;
  gardenOpen = false;
  giftOpen = false;
  minValue: number = 0;
  maxValue: number = 1000;
  isMobileMenuOpen = false;
  currentPage: number = 1;
  itemsPerPage: number = 12;

  filteredProducts: Product[] = [];

  products: Product[] = [];


  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    // this.toastrService.success("Product added ")
  }


  toggleCategorie(buttonNumber: number): void {
    switch (buttonNumber) {
      case 1:
        this.homeOpen = !this.homeOpen;
        this.beautyOpen = this.gardenOpen = this.giftOpen = false;
        break;
      case 2:
        this.beautyOpen = !this.beautyOpen;
        this.homeOpen = this.gardenOpen = this.giftOpen = false;
        break;
      case 3:
        this.gardenOpen = !this.gardenOpen;
        this.beautyOpen = this.homeOpen = this.giftOpen = false;
        break;
      case 4:
        this.giftOpen = !this.giftOpen;
        this.beautyOpen = this.gardenOpen = this.homeOpen = false;
        break;
    }
  }


  public sortProductsDesc(): void {
    this.filteredProducts = [...this.filteredProducts].sort((a, b) => a.price - b.price);
  }
  public sortProductsAsc(): void {
    this.filteredProducts = [...this.filteredProducts].sort((a, b) => b.price - a.price);
  }
filterProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const filtered = this.products.filter(product => 
      product.price >= this.minValue && product.price <= this.maxValue
    );
    this.filteredProducts = filtered.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number): void {
    if (pageNumber < 1 || pageNumber > this.totalPages) return;
    this.currentPage = pageNumber;
    this.filterProducts();
  }

  get totalPages(): number {
    return Math.ceil(this.products.filter(product => 
      product.price >= this.minValue && product.price <= this.maxValue
    ).length / this.itemsPerPage);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
