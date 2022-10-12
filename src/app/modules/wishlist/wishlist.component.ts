import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productList } from 'src/app/data/products';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  products = productList;
  constructor(private router: Router) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {}
}
