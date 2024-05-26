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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { WebComponent } from './components/web/web.component';



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
    WebComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   
   
    // MatButtonModule,
    // --------------------
    // RouterModule,
     FormsModule,
    HttpClientModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatCardModule,
    // MatFormFieldModule,
    // ToastrModule.forRoot(),
    // DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
