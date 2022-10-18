import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productList } from 'src/app/data/products';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist.service';
import {
  add_to_cart,
  add_to_wishlist,
  explore_more_products,product_details
} from './../../data/constants';

import {currentDate} from './../../utility-functions/common';

interface CartItem {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity?: number;
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: CartItem = {
    id: 2,
    imgUrl: 'assets/images/2-medium.png',
    category: 'Electronics',
    title: 'PC All-in-one',
    price: 1832,
    reviews: 78,
    avgrating: 3.5,
  };
  quantity = 1;
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = '';
  tickInterval = 0;

  productId: number = 0;

  pageHeading = product_details;
  addToCartBtn = add_to_cart;
  addToWishlistBtn = add_to_wishlist;
  exploreMoreBtn = explore_more_products;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartStore: AddToCartService,
    private wishStore: AddToWishlistService
  ) {}
  onSlider() {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }
  onAddToCart() {
    this.cartStore.setCartStore({ ...this.product, quantity: this.quantity });
  }
  onAddToWishlist() {
    this.wishStore.setWishStore({ ...this.product, date: currentDate });
  }
  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = productList.filter(
      (product) => product.id === this.productId
    )[0];

    // this.cartStore.getCartStore().subscribe((cart: CartItem[]) => {
    //   this.currentCart = cart;
    // });
  }
}
