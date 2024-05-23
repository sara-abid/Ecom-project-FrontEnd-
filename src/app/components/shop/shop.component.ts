import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent implements OnInit{

  categorieOpen: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleCategorie(): void {
        this.categorieOpen = !this.categorieOpen;
    }
}
