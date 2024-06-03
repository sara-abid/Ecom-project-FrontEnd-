import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { WebComponent } from './components/web/web.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
// import { HeaderComponent } from './dashboard/header/header.component';

const routes: Routes = [
  {

    path: '', component: WebComponent,
    children: [
      { path: 'shoppingcart', component: ShoppingCartComponent },
      { path: '', component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "shop", component: ShopComponent },
      { path: "contactus", component: ContactUsComponent },
      { path: "blog", component: BlogComponent },
      { path: "aboutus", component: AboutUsComponent },
      { path: "cart", component: CartComponent },
      { path: "login", component: LoginComponent },
      { path: 'register', component: RegisterComponent }]
  },
  { path: '', redirectTo: '/dashboard/overview', pathMatch: 'full' }, // default route
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').
      then(m => m.DashboardModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
