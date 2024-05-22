import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
<<<<<<< HEAD
export class ShopComponent {
  
}
=======
export class ShopComponent implements OnInit{

  categorieOpen: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleCategorie(): void {
        this.categorieOpen = !this.categorieOpen;
    }
}
>>>>>>> 05695aec6863c199e8df991af80b04b5a3f859e3
