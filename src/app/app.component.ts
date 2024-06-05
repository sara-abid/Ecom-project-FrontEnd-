import { Component, OnInit } from '@angular/core';
import { CartService } from './serviceApp/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNotification: boolean = false;
  notificationMessage: string = '';
  private cartSubscription: Subscription;
  private productAddedSubscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productAddedSubscription = this.cartService.productAdded$.subscribe(productAdded => {
      if (productAdded) {
        this.showNotification = true;
        this.notificationMessage = 'Product added to cart';
        setTimeout(() => this.showNotification = false, 3000);
      }
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
    this.productAddedSubscription?.unsubscribe();
  }
}
