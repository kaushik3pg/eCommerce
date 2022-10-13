import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productList } from 'src/app/data/products';
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
  constructor(private router: Router, private wishStore: AddToWishlistService) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.wishStore.getWishStore().subscribe(wishlist => {
      this.products = wishlist;
    })
  }
}
