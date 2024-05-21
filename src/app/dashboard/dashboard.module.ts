import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BilloardsComponent } from './billoards/billoards.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {RouterLink, RouterModule, Routes} from "@angular/router";
import { CustomersComponent } from './customers/customers.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { OverviewComponent } from './overview/overview.component';
import { NewProductComponent } from './products-routes/new-product/new-product.component';
import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';
// import { ProductsRoutesComponent } from './products-routes/products-routes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from "@angular/platform-browser";
import {ToastrModule} from "ngx-toastr";
import { ProductsComponent } from './products-routes/products/products.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TagsComponent } from './tags/tags.component';
import { WebsiteComponent } from './website/website.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";


const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'billboards', component: BilloardsComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'products/new', component: NewProductComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  declarations: [
    BilloardsComponent,
    CategoriesComponent,
    CommentsComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    ErrorComponent,
    OrdersComponent,
    OverviewComponent,
    NewProductComponent,
    ProductDetailComponent,
    ProductsComponent,
    TagsComponent,
    WebsiteComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink, BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes), MatTableModule, MatPaginatorModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
