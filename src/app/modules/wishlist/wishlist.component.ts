import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productList } from 'src/app/data/products';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist.service';
import {
  your_wishlist,
  continue_shopping,
  no_item_in_wishlist,
  add_to_cart,
  remove_item,itemAddedToWishlistOn
} from './../../data/constants';

import {currentDate} from './../../utility-functions/common';

interface WishItem {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity?: number;
  date: string;
}
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  products: WishItem[] = [];


  pageHeading = your_wishlist;
  continueBtn = continue_shopping;
  noItemInWishlistMsg = no_item_in_wishlist;
  primaryBtn = add_to_cart;
  secondaryBtn = remove_item;
  itemAddedOnTxt = itemAddedToWishlistOn;

  constructor(
    private router: Router,
    private wishStore: AddToWishlistService,
    private cartStore: AddToCartService
  ) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }

  onAddItemToCart(item: WishItem) {
    this.cartStore.setCartStore({ ...item, quantity: 1 });
  }
  onRemoveItemFromWishlist(item: WishItem) {
    this.wishStore.updateWishStore(item.id);
  }

  ngOnInit(): void {
    this.wishStore.getWishStore().subscribe((wishlist) => {
      this.products = wishlist;
    });
  }
}
