import { Component, OnInit } from '@angular/core';
import { productList } from '../../data/products';
import { furniture } from './../../data/constants';

export interface Item {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity?: number;
  description: string;
  services: {
    cod: string;
    return: string;
  };
}
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent implements OnInit {
  products: Item[] = [];

  pageHeading = furniture;
  constructor() {}

  ngOnInit(): void {
    this.products = productList.filter((item) => item.category === 'Furniture');
  }
}
