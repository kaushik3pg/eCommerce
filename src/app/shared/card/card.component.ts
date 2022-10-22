import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist.service';
import {
  write_review,
  view_ratings,
  add_to_cart,
  add_to_wishlist,
  item_added_to_wishlist,
} from './../../data/constants';
import { currentDate } from './../../utility-functions/common';

interface Item {
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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() products: Item[] = [];
  wishlist: Item[] = [];

  writeReviewBtn = write_review;
  viewRatingsBtn = view_ratings;
  addToCartBtn = add_to_cart;
  addToWishlistBtn = add_to_wishlist;
  itemAlreadyInWishlist = item_added_to_wishlist;

  constructor(
    private cartStore: AddToCartService,
    private wishStore: AddToWishlistService,
    private router: Router
  ) {}

  onAddToCart(item: Item) {
    this.cartStore.setCartStore({ ...item, quantity: 1 });
  }

  onAddToWishlist(item: Item) {
    this.wishStore.setWishStore({ ...item, date: currentDate });
  }

  onCheckProductExistInWishlist(id: number) {
    return this.wishlist.filter((item) => item.id === id).length ? true : false;
  }

  onProductCardClickNavigateTo(id: number){
    this.router.navigate(['product', id])
  }

  ngOnInit(): void {
    this.wishStore.getWishStore().subscribe((currentWishlist) => {
      this.wishlist = currentWishlist;
    });
  }
}
