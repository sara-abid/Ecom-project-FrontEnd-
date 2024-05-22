import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
}
