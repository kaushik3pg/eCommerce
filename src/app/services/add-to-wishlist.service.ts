import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  item_added_to_wishlist,
  item_removed_from_wishlist,
  close_snackbar,
  snackbar_duration,
} from '../data/constants';

export interface WishItem {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AddToWishlistService {
  private wishStore = new BehaviorSubject<WishItem[]>([]);
  private wishStore$ = this.wishStore.asObservable();
  constructor(private snackbar: MatSnackBar) {}

  getWishStore() {
    return this.wishStore$;
  }

  setWishStore(item: WishItem) {
    if (
      !this.wishStore.value.filter((wishItem) => wishItem.id === item.id).length
    ) {
      this.launchSnackbar(
        item_added_to_wishlist,
        close_snackbar,
        snackbar_duration
      );
      this.wishStore.next([...this.wishStore.value, item]);
    }
  }

  updateWishStore(id: number) {
    let itemToBeRemoved = this.wishStore.value.filter(
      (wishItem) => wishItem.id !== id
    );
    this.launchSnackbar(
      item_removed_from_wishlist,
      close_snackbar,
      snackbar_duration
    );
    this.wishStore.next(itemToBeRemoved);
  }

  launchSnackbar(msg: string, action: string, duration: number) {
    this.snackbar.open(msg, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
