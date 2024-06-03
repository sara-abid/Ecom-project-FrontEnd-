// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';

// // const routes: Routes = [];

// // @NgModule({
// //   imports: [RouterModule.forChild(routes)],
// //   exports: [RouterModule]
// // })
// // export class DashboardRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { OverviewComponent } from './overview/overview.component';
// // import { BillboardsComponent } from './billboards/billboards.component';
// // import { WebsiteComponent } from './website/website.component';
// // import { ProductsComponent } from './products-routes/products/products.component';
// import { OrdersComponent } from './orders/orders.component';
// import { TagsComponent } from './tags/tags.component';
// import { CategoriesComponent } from './categories/categories.component';
// import { CustomersComponent } from './customers/customers.component';
// // import { NewProductComponent } from './products-routes/new-product/new-product.component';
// // import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';
// import { CustomerDetailsComponent } from './customer-details/customer-details.component';
// import { CommentsComponent } from './comments/comments.component';
// import { ErrorComponent } from './error/error.component';
// import { BilloardsComponent } from './billoards/billoards.component';
// import { DashboardComponent } from './dashboard.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
// import { HeaderComponent } from './header/header.component';
// import { ProductsComponent } from './products-routes/products/products.component';
// import { NewProductComponent } from './products-routes/new-product/new-product.component';
// import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';

// const routes: Routes = [
// {path:'',
//     component : DashboardComponent,
//     children : [

//   { path: 'overview', component: OverviewComponent },
//   { path: 'billboards', component: BilloardsComponent },
//   // { path: 'website', component: WebsiteComponent },
//   { path: 'products', component: ProductsComponent },
//   { path: 'products/new', component: NewProductComponent },
//   { path: 'products/:id', component: ProductDetailComponent },
//   { path: 'customers/:id', component: CustomerDetailsComponent },
//   { path: 'orders', component: OrdersComponent },
//   { path: 'tags', component: TagsComponent },
//   { path: 'customers', component: CustomersComponent },
//   { path: 'categories', component: CategoriesComponent },
//   { path: 'comments', component: CommentsComponent },
//   { path: '', redirectTo: 'overview', pathMatch: 'full' },
//   { path: '**', component: ErrorComponent }]}]
// ;



// @NgModule({
//   imports: [RouterModule.forChild(routes),
//   SideBarComponent,
//   HeaderComponent],
//   exports: [RouterModule]
// })
// export class DashboardRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { BilloardsComponent } from './billoards/billoards.component';
import { OrdersComponent } from './orders/orders.component';
import { TagsComponent } from './tags/tags.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CommentsComponent } from './comments/comments.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products-routes/products/products.component';
import { NewProductComponent } from './products-routes/new-product/new-product.component';
import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'billboards', component: BilloardsComponent },
      { path: 'products', component: ProductsComponent },
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
    ]
  }
];
// ,SideBarComponent,HeaderComponent
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
