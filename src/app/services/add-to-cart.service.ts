import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  item_added_to_cart,
  item_removed_from_cart,
  close_snackbar,
  snackbar_duration,
} from '../data/constants';

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

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private cartStore = new BehaviorSubject<CartItem[]>([]);
  private cartStore$ = this.cartStore.asObservable();

  constructor(private snackbar: MatSnackBar) {}

  getCartStore() {
    return this.cartStore$;
  }

  setCartStore(item: CartItem) {
    let productAlreadyExists = false;
    if (this.cartStore.value.length) {
      this.cartStore.value.map((cartItem, index) => {
        if (cartItem.id === item.id) {
          let totalQtyBeforeMerge =
            this.cartStore.value[index].quantity + item.quantity;
          this.cartStore.value[index].quantity =
            totalQtyBeforeMerge > 10 ? 10 : totalQtyBeforeMerge;
          productAlreadyExists = true;
        }
      });
    }
    this.launchSnackbar(item_added_to_cart, close_snackbar, snackbar_duration);
    return productAlreadyExists
      ? this.cartStore.next([...this.cartStore.value])
      : this.cartStore.next([...this.cartStore.value, item]);
  }

  updateCartStore(id: number) {
    let itemToBeRemoved = this.cartStore.value.filter(
      (cartItem) => cartItem.id !== id
    );
    this.launchSnackbar(
      item_removed_from_cart,
      close_snackbar,
      snackbar_duration
    );
    this.cartStore.next(itemToBeRemoved);
  }

  deleteCartStore(){
    this.cartStore.next([]);
  }

  launchSnackbar(msg: string, action: string, duration: number) {
    this.snackbar.open(msg, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
