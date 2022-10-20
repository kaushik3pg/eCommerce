import { Component, OnInit } from '@angular/core';
import { productList } from '../../data/products';
import { watches } from './../../data/constants';

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
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css'],
})
export class WatchesComponent implements OnInit {
  products: Item[] = [];

  pageHeading = watches;
  constructor() {}

  ngOnInit(): void {
    this.products = productList.filter((item) => item.category === 'Watch');
  }
}
