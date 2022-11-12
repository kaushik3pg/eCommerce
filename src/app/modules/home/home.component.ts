import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slides } from '../../data/slides';
import { productList } from '../../data/products';

import { ValidateLoginService } from '../../services/validate-login.service';
import { featured_products } from './../../data/constants';
import { productCategories } from 'src/app/data/product-categories';

interface Item {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity?: number;
  description: string;
  seller: string;
  services: {
    cod: string;
    return: string;
  };
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Item[] = [];
  slides = slides;
  categories = productCategories;
  selectedCategories = [];
  subscription!: Subscription;
  itemsPerPage = 25;
  totalProducts = 0;

  pageHeading = featured_products;
  constructor() {}

  onCategoryFilterChange() {
    const filteredProductList: Item[] = [];
    productList.forEach((product) => {
      this.selectedCategories.map((category) =>
        category === product.category ? filteredProductList.push(product) : null
      );
    });

    this.products = filteredProductList.length
      ? filteredProductList
      : productList;
  }

  onPageChange(event: any) {
    this.itemsPerPage = event.pageSize;
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.products = productList.slice(startIndex, endIndex);
  }

  ngOnInit(): void {
    this.totalProducts = productList.length;
    this.products = productList.slice(0, this.itemsPerPage);
  }

  ngOnDestroy(): void {}
}
