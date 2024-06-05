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

  categories: Category[] = [];
  selectedCategory: Category | null = null;
  newCategory: Category = { categoryId: 0, categoryName: '', categoryDescription: '' };

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  addCategory(): void {
    this.categoryService.addCategory(this.newCategory).subscribe(() => {
      this.loadCategories();
      this.newCategory = { categoryId: 0, categoryName: '', categoryDescription: '' };
    });
  }

  updateCategory(category: Category): void {
    if (category.categoryId) {
      this.categoryService.updateCategory(category.categoryId, category).subscribe(() => this.loadCategories());
    }
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => this.loadCategories());
  }

  deleteAllCategories(): void {
    this.categoryService.deleteAllCategories().subscribe(() => this.loadCategories());
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  clearSelection(): void {
    this.selectedCategory = null;
  }

}

