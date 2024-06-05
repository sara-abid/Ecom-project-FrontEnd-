import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ProductServiceService } from '../../product-service.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { TagsService } from '../../services/tags.service';
import {SubcategoryService} from "../../services/subacategory-service";
import {Product} from "../../models/product";
import {ProductServiceService} from "../../services/product-service.service";
// import { CategoriesService } from 'src/app/categories.service';
// import { TagsService } from 'src/app/tags.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
//
//   public productForm: FormGroup;
//
//   public imageUrl: string = '';
//
//   private apiUrl = 'http://localhost:8080/product';
//
//   public categories: any[] = [];
//
//   public tags: any[] = [];
//
//   constructor(
//     private http: HttpClient,
//     private fb: FormBuilder,
//     private toastr: ToastrService,
//     private catS: CategoriesService,
//     // private tagS: TagsService,
// private sub : SubcategoryService,
//
//   ) {
//     this.productForm = this.fb.group({
//       name: ['', Validators.required],
//       price: ['', Validators.required],
//       image: [''],
//       description: ['', Validators.required],
//       category: ['', Validators.required],
//       discount: ['', Validators.required],
//       quantity: ['', Validators.required],
//       // tag: [''],
//       // featured: [false]
//     });
//   }
//
//   ngOnInit(): void {
//
//
//
//     this.getAllcategories();
//
//
//
//   }
//
//
//   //get all categories
//   // getAllcategories() {
//   //   this.catS.getAllCategories().subscribe(
//   //     (data: any[]) => {
//   //
//   //       this.categories = data;
//   //
//   //     },
//   //     (error) => {
//   //
//   //       console.error(error);
//   //
//   //     }
//   //   );
//   // }
//
//   getAllcategories() {
//     this.sub.getAll().subscribe(
//       (data: any[]) => {
//
//         this.categories = data;
//
//       },
//       (error) => {
//
//         console.error(error);
//
//       }
//     );
//   }
//
//
//
//
//   onSubmit() {
//     if (this.productForm.valid) {
//       this.productForm.value['image'] = this.imageUrl;
//
//       this.http.post(this.apiUrl, this.productForm.value).subscribe(res => {
//
//
//         this.toastr.success('Product added successfully');
//         this.productForm.reset();
//         this.imageUrl = "";
//
//
//       },
//         (err) => {
//           this.toastr.success('a problem accours when adding a products');
//         });
//
//     }
//   }
//
//   //price formatteur
//   public formatPrice(price: any) {
//     if (typeof price === 'string') {
//
//       if (price.includes('$')) {
//
//         return price.replace('$', '') + '$';
//       } else {
//
//         return price + '$';
//       }
//     } else if (typeof price === 'number') {
//
//       return price.toString() + '$';
//     } else {
//
//       return 'N/A';
//     }
//   }
//
//
//   onImageChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//
//
//       const reader = new FileReader();
//       reader.onload = (e) => {
//
//         this.imageUrl = reader.result as string;
//
//       };
//
//       reader.readAsDataURL(file);
//     }
//   }
//   openImage() {
//     const inputElement = document.getElementById('image');
//     if (inputElement) {
//       inputElement.click();
//     }
//   }

//   --------------------------------------------------------------------------
  products: any = [];
  newProduct: { price: number; imageDto: null; description: string; productName: string } = { productName: '', description: '', price: 0, imageDto: null };
  subcategoryIds: number[] = [];  // Adjust according to your needs
  errorMessage: string = '';

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        this.handleError(error);
      }
    );
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      data => {
        console.log('Product fetched successfully:', data);
      },
      error => {
        this.handleError(error);
      }
    );
  }

  handleFileInput(event: any) {
    this.newProduct.imageDto = event.target.files[0];
  }

  addProductToSubcategories() {
    this.productService.addProductToSubcategories(this.newProduct, this.subcategoryIds).subscribe(
      response => {
        console.log('Product added successfully:', response);
        this.getAllProducts();  // Refresh the product list after adding a new product
      },
      error => {
        this.handleError(error);
      }
    );
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      response => {
        console.log('Product deleted successfully:', response);
        this.getAllProducts();  // Refresh the product list after deleting a product
      },
      error => {
        this.handleError(error);
      }
    );
  }

  updateProduct(id: number, updatedProduct: Product) {
    this.productService.updateProduct(id, updatedProduct).subscribe(
      response => {
        console.log('Product updated successfully:', response);
        this.getAllProducts();  // Refresh the product list after updating a product
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    this.errorMessage = error;
  }

}

