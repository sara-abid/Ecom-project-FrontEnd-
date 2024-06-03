import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
  ],
  imports: [CommonModule
  ],
  exports: [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatFormFieldModule
]
})
export class SharedModel{
}