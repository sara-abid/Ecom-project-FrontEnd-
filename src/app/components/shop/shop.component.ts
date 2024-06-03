import { Component, OnInit } from '@angular/core';


interface Product {
  name: string;
  price: number;
}

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

  products: Product[] = [
    { name: 'Nike Air Max 2019', price: 259 },
    { name: 'Nike Air Max 2020', price: 500 },
    { name: 'Adidas Ultra Boost', price: 750 },
    { name: 'Nike Air Max 2019', price: 259 },
    { name: 'Nike Air Max 2020', price: 500 },
    { name: 'Adidas Ultra Boost', price: 750 },
    { name: 'Nike Air Max 2019', price: 259 },
    { name: 'Nike Air Max 2020', price: 500 },
    { name: 'Adidas Ultra Boost', price: 750 },
    { name: 'Nike Air Max 2019', price: 259 },
    { name: 'Nike ', price: 500 },
    { name: 'Adidas ', price: 750 },
    { name: 'Nike Air Max 2019', price: 300 },
    { name: 'Nike Air Max 2020', price: 500 },
    { name: 'Adidas Ultra Boost', price: 750 },
    { name: 'Nike Air Max 2019', price: 259 },
    { name: 'Nike Air Max 2020', price: 500 },
    { name: 'Adidas Ultra Boost', price: 750 },
  ];

  filteredProducts: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filterProducts();
  }

  toggleCategorie(buttonNumber: number): void {
    if (buttonNumber === 1) {
      this.homeOpen = !this.homeOpen;
      this.beautyOpen = false;
      this.gardenOpen = false;
      this.giftOpen = false;
    } else if (buttonNumber === 2) {
      this.beautyOpen = !this.beautyOpen;
      this.homeOpen = false;
      this.gardenOpen = false;
      this.giftOpen = false;
    } else if (buttonNumber === 3) {
      this.gardenOpen = !this.gardenOpen;
      this.beautyOpen = false;
      this.homeOpen = false;
      this.giftOpen = false;
    } else if (buttonNumber === 4) {
      this.gardenOpen = false;
      this.beautyOpen = false;
      this.homeOpen = false;
      this.giftOpen = !this.giftOpen;
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
