import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { WebComponent } from './components/web/web.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    // HomeComponent,
    ContactUsComponent,
    BlogComponent,
    AboutUsComponent,
    CartComponent,
    ShopComponent,
    ShoppingCartComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    //SharedModule,
    DashboardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
