import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CategoriesService} from "../services/categories.service";
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  public myForm!: FormGroup;
  public editMode: boolean = false;
  public categories: any[] = [];
  private baseUrl = 'http://localhost:3000/api/v1/categories';
  private editCat: any;
  public loading: boolean = false;
  public imageUrl: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private catService: CategoriesService,
    private router:Router
  ) { }

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
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      header: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });

    this.getAllcategories();
  }

  getAllcategories() {
    this.catService.getAllCategories().subscribe(
      (data: any[]) => {
        this.categories = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public update(id: string) {
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
            this.getAllcategories();
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.loading = true;

        console.log(this.myForm.value);
        const cat = {
          name: this.myForm.value.header,
          description: this.myForm.value.description,
          image: this.imageUrl,
        };
        this.catService.createCategory(cat).subscribe(
          (data) => {
            console.log(data);
            this.loading = false;
            this.getAllcategories();
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

  public delete(id: string) {
    this.catService.deleteCategoryById(id).subscribe(
      (data) => {
        console.log(data);
        this.getAllcategories();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public formatPrice(price:any) {
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

  public  formatReadableDate(dateString:any) {
    const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    const date = new Date(dateString);

    return date.toLocaleString('en-US', options);
  }

  public navigateTo(id:string){

    this.router.navigate(['customers',id]);

  }

  // categories: Category[] = [];
  // selectedCategory: Category | null = null;
  // newCategory: Category = { categoryId: 0, categoryName: '', categoryDescription: '', subcategoryList: [] };
  // editMode: boolean = false;

  // constructor(private categoriesService: CategoriesService) {}

  // ngOnInit(): void {
  //   this.loadCategories();
  // }

  // loadCategories(): void {
  //   this.categoriesService.getAllCategories().subscribe(
  //     (data: Category[]) => {
  //       this.categories = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching categories', error);
  //     }
  //   );
  // }

  // getCategoryById(id: number): void {
  //   this.categoriesService.getCategoryById(id).subscribe(
  //     (category: Category) => {
  //       this.selectedCategory = category;
  //     },
  //     (error) => {
  //       console.error('Error fetching category', error);
  //     }
  //   );
  // }

  // addCategory(): void {
  //   this.categoriesService.addCategory(this.newCategory).subscribe(
  //     () => {
  //       this.loadCategories();
  //       this.newCategory = { categoryId: 0, categoryName: '', categoryDescription: '', subcategoryList: [] };
  //     },
  //     (error) => {
  //       console.error('Error adding category', error);
  //     }
  //   );
  // }

  // updateCategory(): void {
  //   if (this.selectedCategory && this.selectedCategory.categoryId) {
  //     this.categoriesService.updateCategory(this.selectedCategory.categoryId, this.selectedCategory).subscribe(
  //       () => {
  //         this.loadCategories();
  //         this.selectedCategory = null;
  //         this.editMode = false;
  //       },
  //       (error) => {
  //         console.error('Error updating category', error);
  //       }
  //     );
  //   }
  // }

  // deleteCategory(id: number): void {
  //   this.categoriesService.deleteCategory(id).subscribe(
  //     () => {
  //       this.loadCategories();
  //     },
  //     (error) => {
  //       console.error('Error deleting category', error);
  //     }
  //   );
  // }

  // deleteAllCategories(): void {
  //   this.categoriesService.deleteAllCategories().subscribe(
  //     () => {
  //       this.loadCategories();
  //     },
  //     (error) => {
  //       console.error('Error deleting all categories', error);
  //     }
  //   );
  // }

  // selectCategory(category: Category): void {
  //   this.selectedCategory = { ...category };
  //   this.editMode = true;
  // }

  // clearSelection(): void {
  //   this.selectedCategory = null;
  //   this.editMode = false;
  // }


}

