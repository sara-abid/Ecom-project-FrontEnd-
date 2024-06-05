import { Category } from "./category";

export class Subcategory{
  constructor(public subCategoryId: number ,
              public subCategoryName: string,
              public subCategoryDescription: string,
              public categoryId: number

            ) {
  }

}

// export interface Subcategory {
//   subcategoryId: number;
//   subcategoryName: string;
//   category: Category;


// }
