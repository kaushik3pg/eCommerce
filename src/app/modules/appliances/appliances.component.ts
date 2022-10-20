import { Component, OnInit } from '@angular/core';
import { productList } from '../../data/products';
import { appliances } from './../../data/constants';

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
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css'],
})
export class AppliancesComponent implements OnInit {
  products: Item[] = [];

  pageHeading = appliances;
  constructor() {}

  ngOnInit(): void {
    this.products = productList.filter(
      (item) => item.category === 'Appliances'
    );
  }
}
