// import { Component } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {HttpClient} from "@angular/common/http";
// import {Router} from "@angular/router";
// import {CategoriesService} from "../services/categories.service";
//
// @Component({
//   selector: 'app-subcategories',
//   templateUrl: './subcategories.component.html',
//   styleUrls: ['./subcategories.component.css']
// })
// export class SubcategoriesComponent {
//   public myForm!: FormGroup;
//   public editMode: boolean = false;
//   public categories: any[] = [];
//   private baseUrl = 'http://localhost:3000/api/v1/categories';
//   private editCat: any;
//   public loading: boolean = false;
//   public imageUrl: string = '';
//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//     private catService: CategoriesService,
//     private router:Router
//   ) { }
//
//   onImageChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         this.imageUrl = reader.result as string;
//       };
//       reader.readAsDataURL(file);
//     }
//   }
//
//   openImage() {
//     const inputElement = document.getElementById('image');
//     if (inputElement) {
//       inputElement.click();
//     }
//   }
//   ngOnInit(): void {
//     this.myForm = this.formBuilder.group({
//       header: ['', Validators.required],
//       description: ['', Validators.required],
//       image: ['']
//     });
//
//     this.getAllcategories();
//   }
//
//   getAllcategories() {
//     this.catService.getAllCategories().subscribe(
//       (data: any[]) => {
//         this.categories = data;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
//
//   public update(id: string) {
//     this.editMode = true;
//     this.catService.getCategoryById(id).subscribe(
//       (data: any) => {
//         this.editCat = data;
//         this.myForm.patchValue({
//           header: this.editCat.name,
//           description: this.editCat.description
//
//         });
//
//         this.imageUrl = this.editCat.image;
//
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
//
//   onSubmit() {
//     if (this.myForm.valid) {
//       if (this.editMode) {
//         const updatedData = {
//           name: this.myForm.value.header,
//           description: this.myForm.value.description,
//           image: this.imageUrl,
//         };
//
//         this.catService.updateCategoryById(this.editCat._id, updatedData).subscribe(
//           (data) => {
//             console.log(data);
//             this.editMode = false;
//             this.getAllcategories();
//           },
//           (error) => {
//             console.error(error);
//           }
//         );
//       } else {
//         this.loading = true;
//
//         console.log(this.myForm.value);
//         const cat = {
//           name: this.myForm.value.header,
//           description: this.myForm.value.description,
//           image: this.imageUrl,
//         };
//         this.catService.createCategory(cat).subscribe(
//           (data) => {
//             console.log(data);
//             this.loading = false;
//             this.getAllcategories();
//             this.myForm.reset();
//             this.imageUrl = "";
//           },
//           (error) => {
//             console.error(error);
//             this.loading = false;
//           }
//         );
//       }
//     }
//   }
//
//   public delete(id: string) {
//     this.catService.deleteCategoryById(id).subscribe(
//       (data) => {
//         console.log(data);
//         this.getAllcategories();
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
//
//   public formatPrice(price:any) {
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
//   public  formatReadableDate(dateString:any) {
//     const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
//
//     const date = new Date(dateString);
//
//     return date.toLocaleString('en-US', options);
//   }
//
//   public navigateTo(id:string){
//
//     this.router.navigate(['customers',id]);
//
//   }
//
//
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Subcategory } from '../models/subcategory';
import {SubcategoryService} from "../services/subacategory-service";

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  public myForm!: FormGroup;
  public editMode: boolean = false;
  public categories: any[] = [];
  public subcategories: Subcategory[] = [];
  public newSubcategory: Subcategory = { subCategoryId: 0, subCategoryName: '', subCategoryDescription: '' };
  public loading: boolean = false;
  public imageUrl: string = '';
  private editCat: any;
  private baseUrl = 'http://localhost:3000/api/v1/categories';

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private catService: CategoriesService,
      private subcategoryService: SubcategoryService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      header: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });

    this.getAllCategories();
    this.loadSubcategories();
  }

  getAllCategories() {
    this.catService.getAllCategories().subscribe(
        (data: any[]) => {
          this.categories = data;
        },
        (error) => {
          console.error(error);
        }
    );
  }

  loadSubcategories(): void {
    this.subcategoryService.getAll().subscribe(data => {
      this.subcategories = data;
    });
  }

  createSubcategory(): void {
    if (this.editMode) {
      this.subcategoryService.update(this.newSubcategory.subCategoryId, this.newSubcategory).subscribe(() => {
        this.loadSubcategories();
        this.editMode = false;
        this.newSubcategory = { subCategoryId: 0, subCategoryName: '', subCategoryDescription: '' };
      });
    } else {
      this.subcategoryService.create(this.newSubcategory).subscribe(() => {
        this.loadSubcategories();
        this.newSubcategory = { subCategoryId: 0, subCategoryName: '', subCategoryDescription: '' };
      });
    }
  }

  updateSubcategory(id: number, subcategory: Subcategory): void {
    this.subcategoryService.update(id, subcategory).subscribe(() => {
      this.loadSubcategories();
    });
  }

  deleteSubcategory(id: number): void {
    this.subcategoryService.delete(id).subscribe(() => {
      this.loadSubcategories();
    });
  }

  deleteAllSubcategories(): void {
    this.subcategoryService.deleteAll().subscribe(() => {
      this.loadSubcategories();
    });
  }

  editSubcategory(subcategory: Subcategory): void {
    this.newSubcategory = { ...subcategory };
    this.editMode = true;
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  openImage() {
    const inputElement = document.getElementById('image');
    if (inputElement) {
      inputElement.click();
    }
  }

  public updateCategory(id: string) {
    this.editMode = true;
    this.catService.getCategoryById(id).subscribe(
        (data: any) => {
          this.editCat = data;
          this.myForm.patchValue({
            header: this.editCat.name,
            description: this.editCat.description
          });
          this.imageUrl = this.editCat.image;
        },
        (error) => {
          console.error(error);
        }
    );
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.editMode) {
        const updatedData = {
          name: this.myForm.value.header,
          description: this.myForm.value.description,
          image: this.imageUrl,
        };
        this.catService.updateCategoryById(this.editCat._id, updatedData).subscribe(
            (data) => {
              console.log(data);
              this.editMode = false;
              this.getAllCategories();
            },
            (error) => {
              console.error(error);
            }
        );
      } else {
        this.loading = true;
        const cat = {
          name: this.myForm.value.header,
          description: this.myForm.value.description,
          image: this.imageUrl,
        };
        this.catService.createCategory(cat).subscribe(
            (data) => {
              console.log(data);
              this.loading = false;
              this.getAllCategories();
              this.myForm.reset();
              this.imageUrl = "";
            },
            (error) => {
              console.error(error);
              this.loading = false;
            }
        );
      }
    }
  }

  public deleteCategory(id: string) {
    this.catService.deleteCategoryById(id).subscribe(
        (data) => {
          console.log(data);
          this.getAllCategories();
        },
        (error) => {
          console.error(error);
        }
    );
  }

  public formatPrice(price: any) {
    if (typeof price === 'string') {
      if (price.includes('$')) {
        return price.replace('$', '') + '$';
      } else {
        return price + '$';
      }
    } else if (typeof price === 'number') {
      return price.toString() + '$';
    } else {
      return 'N/A';
    }
  }

  public formatReadableDate(dateString: any) {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  }

  public navigateTo(id: string) {
    this.router.navigate(['customers', id]);
  }
}
