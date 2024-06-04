import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/serviceApp/product.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  cartItemCount: number = 0;

  constructor(private productService: ProductService) { }

  actions : Array<any>=[
    {title:"Home", route:"/home"},
    {title: "Shop", route: "/shop"},
    {title: "Contact us", route: "/contactus"},
    {title: "Blog", route: "/blog"},
    {title: "About us", route: "/aboutus"},
  ]

  isOpen : boolean = false;

  goToSignup() {
  }
  ngOnInit(): void {
    this.productService.cart$.subscribe(products => {
      this.cartItemCount = products.length;
    });
  }
}
