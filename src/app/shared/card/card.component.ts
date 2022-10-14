import { Component, OnInit, Input } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist.service';

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
  wishlist : Item[] = [];
  constructor(
    private cartStore: AddToCartService,
    private wishStore: AddToWishlistService
  ) {}

  onAddToCart(item: Item) {
    this.cartStore.setCartStore({ ...item, quantity: 1 });
  }

  onAddToWishlist(item: Item) {
    this.wishStore.setWishStore({ ...item });
  }

  onCheckProductExistInWishlist(id: number){
    return this.wishlist.filter(item => item.id === id).length ? true : false;
  }

  ngOnInit(): void {
    this.wishStore.getWishStore().subscribe(currentWishlist => {
      this.wishlist = currentWishlist;
    });
  }
}
