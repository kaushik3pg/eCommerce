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
  products = productList;
  slides = slides;
  categories = productCategories;
  selectedCategories = [];
  subscription!: Subscription;

  pageHeading = featured_products;
  constructor(
    private router: Router,
    private validateLogin: ValidateLoginService
  ) {}

  onCategoryFilterChange() {
    console.log(this.selectedCategories);
    const filteredProductList: Item[] = [];
  productList.forEach(product => {
    this.selectedCategories.map(category => category === product.category ? filteredProductList.push(product) : null)
  })
  this.products = filteredProductList.length ? filteredProductList : productList;
  }
  ngOnInit(): void {
    // this.subscription = this.validateLogin.getLoginStatus().subscribe((loginStatus) => {
    //   !loginStatus ? this.router.navigate(['account']) : null;
    // });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
