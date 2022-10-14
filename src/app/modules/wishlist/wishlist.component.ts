import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productList } from 'src/app/data/products';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist.service';

interface WishItem {
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
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  products: WishItem[] = [];
  constructor(
    private router: Router,
    private wishStore: AddToWishlistService,
    private cartStore: AddToCartService
  ) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }

  onAddItemToCart(item: WishItem) {
    console.log('You are ready to add ', item ,' to cart!!');
    this.cartStore.setCartStore({...item, quantity: 1});
  }
  onRemoveItemFromWishlist(item: WishItem) {
    console.log('You are ready to remove ', item ,' from wishlist!!');
    this.wishStore.updateWishStore(item.id);
  }

  ngOnInit(): void {
    this.wishStore.getWishStore().subscribe((wishlist) => {
      this.products = wishlist;
    });
  }
}
