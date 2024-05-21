import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DashboardModule} from "./dashboard/dashboard.module";
import {CommonModule} from "@angular/common";
import {SideBarComponent} from "./dashboard/side-bar/side-bar.component";
import {HeaderComponent} from "./dashboard/header/header.component";
import {Router, RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    // DashboardModule
    SideBarComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    DashboardModule,
    // CommonModule,
    RouterModule,
    // FormsModule
  ],
  // exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
