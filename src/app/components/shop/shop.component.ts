import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/serviceApp/product.service';
import { CartService } from 'src/app/serviceApp/cart.service';
import {ProductServiceService} from "../../dashboard/services/product-service.service";
import {data} from "autoprefixer";

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
    //private productService: ProductService,
    private cartService: CartService,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      {
        next:data => {
          this.products = data;
          console.log(data)
        }
      }
    );
    this.filteredProducts = [...this.products];
    // this.getAllProducts();
  }

  // --------------------------------------
  // products: any = [];
  // newProduct: { price: number; imageDto: null; description: string; productName: string } = { productName: '', description: '', price: 0, imageDto: null };
  // subcategoryIds: number[] = [];  // Adjust according to your needs
  // errorMessage: string = '';
  //
  // private handleError(error: any) {
  //   console.error('An error occurred:', error);
  //   this.errorMessage = error;
  // }
  //
  // getAllProducts() {
  //   this.productService.getAllProducts().subscribe(
  //     data => {
  //       this.products = data;
  //     },
  //     error => {
  //       this.handleError(error);
  //     }
  //   );
  // }
  // ----------------------------------------------------------------------------------
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