// export class Product{
// constructor(public id :number ,
//             public productName : string ,
//             public description: string,
//             public price : number ,
//             public quantityAvailable : number,
//             public image : string ){
// }
// }


import {Subcategory} from "./subcategory";

export class Product {
  id: number;
  productName: string;
  description: string;
  price: number;
  imageDto: File;
  // subcategoryIds:Subcategory[]=[];

  constructor(
    id: number,
    productName: string,
    description: string,
    price: number,
    imageDto: File
  ) {
    this.id = id;
    this.productName = productName;
    this.description = description;
    this.price = price;
    this.imageDto = imageDto;
  }
}
