// // // import { NgModule } from '@angular/core';
// // // import { CommonModule } from '@angular/common';

// // // import { DashboardRoutingModule } from './dashboard-routing.module';


// // // @NgModule({
// // //   declarations: [],
// // //   imports: [
// // //     CommonModule,
// // //     DashboardRoutingModule
// // //   ]
// // // })
// // // export class DashboardModule { }
// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { OverviewComponent } from './overview/overview.component';
// // // import { BillboardsComponent } from './billboards/billboards.component';
// // // import { WebsiteComponent } from './website/website.component';
// // // import { ProductsComponent } from './products-routes/products/products.component';
// // import { OrdersComponent } from './orders/orders.component';
// // import { TagsComponent } from './tags/tags.component';
// // import { CategoriesComponent } from './categories/categories.component';
// // import { CustomersComponent } from './customers/customers.component';
// // // import { NewProductComponent } from './products-routes/new-product/new-product.component';
// // // import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';
// // import { CustomerDetailsComponent } from './customer-details/customer-details.component';
// // import { CommentsComponent } from './comments/comments.component';
// // import { ErrorComponent } from './error/error.component';
// // import { DashboardRoutingModule } from './dashboard-routing.module';
// // import { BilloardsComponent } from './billoards/billoards.component';
// // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // import { SideBarComponent } from './side-bar/side-bar.component';
// // import { HeaderComponent } from './header/header.component';
// // import { NewProductComponent } from './products-routes/new-product/new-product.component';
// // import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';
// // import { ProductsComponent } from './products-routes/products/products.component';
// // import { RouterLink, RouterModule } from '@angular/router';

// // @NgModule({
// //   declarations: [
// //     OverviewComponent,
// //     BilloardsComponent,
// //    ProductsComponent,
// //     OrdersComponent,
// //     TagsComponent,
// //     CategoriesComponent,
// //     CustomersComponent,
// //     NewProductComponent,
// //     ProductDetailComponent,
// //     CustomerDetailsComponent,
// //     CommentsComponent,
// //     ErrorComponent,
// //     // SideBarComponent,
// //     // HeaderComponent
// //   ],
// //   imports: [
// //     CommonModule,
// //     DashboardRoutingModule,
// //     ReactiveFormsModule,
// //     FormsModule,
// //     RouterLink,
// //     RouterModule
// //   ],
// //   exports: [OverviewComponent,
// //     BilloardsComponent,
// //    ProductsComponent,
// //     OrdersComponent,
// //     TagsComponent,
// //     CategoriesComponent,
// //     CustomersComponent,
// //     NewProductComponent,
// //     ProductDetailComponent,
// //     CustomerDetailsComponent,
// //     CommentsComponent,
// //     ErrorComponent,
// //     SideBarComponent,
// //     HeaderComponent
// //   ]
// // })
// // export class DashboardModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { DashboardRoutingModule } from './dashboard-routing.module';
// import { OverviewComponent } from './overview/overview.component';
// import { BilloardsComponent } from './billoards/billoards.component';
// import { ProductsComponent } from './products-routes/products/products.component';
// import { OrdersComponent } from './orders/orders.component';
// import { TagsComponent } from './tags/tags.component';
// import { CategoriesComponent } from './categories/categories.component';
// import { CustomersComponent } from './customers/customers.component';
// import { NewProductComponent } from './products-routes/new-product/new-product.component';
// import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';
// import { CustomerDetailsComponent } from './customer-details/customer-details.component';
// import { CommentsComponent } from './comments/comments.component';
// import { ErrorComponent } from './error/error.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
// import { HeaderComponent } from './header/header.component';

// @NgModule({
//   declarations: [
//     OverviewComponent,
//     BilloardsComponent,
//     ProductsComponent,
//     OrdersComponent,
//     TagsComponent,
//     CategoriesComponent,
//     CustomersComponent,
//     NewProductComponent,
//     ProductDetailComponent,
//     CustomerDetailsComponent,
//     CommentsComponent,
//     ErrorComponent,
//     SideBarComponent,
//     HeaderComponent
//   ],
//   imports: [
//     CommonModule,
//     DashboardRoutingModule,
//     ReactiveFormsModule,
//     FormsModule,
//     RouterModule
//   ],
//   exports: [
//     OverviewComponent,
//     BilloardsComponent,
//     ProductsComponent,
//     OrdersComponent,
//     TagsComponent,
//     CategoriesComponent,
//     CustomersComponent,
//     NewProductComponent,
//     ProductDetailComponent,
//     CustomerDetailsComponent,
//     CommentsComponent,
//     ErrorComponent,
//     SideBarComponent,
//     HeaderComponent,
//     DashboardComponent
//   ]
// })
// export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { BilloardsComponent } from './billoards/billoards.component';
import { ProductsComponent } from './products-routes/products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { TagsComponent } from './tags/tags.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { NewProductComponent } from './products-routes/new-product/new-product.component';
import { ProductDetailComponent } from './products-routes/product-detail/product-detail.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CommentsComponent } from './comments/comments.component';
import { ErrorComponent } from './error/error.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DataSource } from '@angular/cdk/collections';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    HeaderComponent,
    OverviewComponent,
    BilloardsComponent,
    ProductsComponent,
    OrdersComponent,
    TagsComponent,
    CategoriesComponent,
    CustomersComponent,
    NewProductComponent,
    ProductDetailComponent,
    CustomerDetailsComponent,
    CommentsComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    ToastrModule.forRoot()
  ]
})
export class DashboardModule { }
