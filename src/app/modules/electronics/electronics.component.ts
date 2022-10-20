import { Component, OnInit } from '@angular/core';
import { productList } from '../../data/products';
import { electronics } from './../../data/constants';

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
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})
export class ElectronicsComponent implements OnInit {
  products: Item[] = [];

  pageHeading = electronics;
  constructor() {}

  ngOnInit(): void {
    this.products = productList.filter(
      (item) => item.category === 'Electronics'
    );
  }
}
