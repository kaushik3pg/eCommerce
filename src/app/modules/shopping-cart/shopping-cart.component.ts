import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist.service';
import {
  cart_summary,
  remove_item,
  pay,
  invoice,
  add_to_wishlist,
  continue_shopping,
  no_item_in_cart,
} from '../../data/constants';

export interface CartItem {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity: number;
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  max = 10;
  min = 1;
  step = 1;
  thumbLabel = '';
  tickInterval = 0;
  quantityPurchased = 0;

  totalAmount: number = 0;

  pageHeading = cart_summary;
  primaryBtn = add_to_wishlist;
  secondaryBtn = remove_item;
  payBtn = pay;
  invoiceHeading = invoice;
  continueBtn = continue_shopping;
  noItemMsg = no_item_in_cart;

  constructor(
    private router: Router,
    private cartStore: AddToCartService,
    private wishStore: AddToWishlistService
  ) {}

  onSlider(index: number, qty: number) {
    this.cartItems[index].quantity = qty;
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    let total = 0;
    this.cartItems.forEach((item: CartItem) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  onContinueShopping() {
    this.router.navigate(['home']);
  }

  onRemoveItemFromCart(index: number) {
    this.cartStore.updateCartStore(index);
  }

  onAddItemToWishlist(item: CartItem) {
    this.wishStore.setWishStore({ ...item });
  }

  ngOnInit(): void {
    this.totalAmount = this.calculateTotalAmount();
    this.cartStore.getCartStore().subscribe((currentCart) => {
      this.cartItems = currentCart;
    });
  }
}
