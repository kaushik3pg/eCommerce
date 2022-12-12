import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';

import {
  orderPlaced,
  close_snackbar,
  snackbar_duration,
} from '../data/constants';
import { Router } from '@angular/router';
import { AddToCartService } from './add-to-cart.service';

export interface Order {
 cart: {}[],
 date : string,
}


@Injectable({
  providedIn: 'root',
})
export class CreateOrderHistoryService {

  private orderHistory = new BehaviorSubject<Order[]>([]);
  private orderHistory$ = this.orderHistory.asObservable();

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private cartStore: AddToCartService
  ) {}

  getOrderHistory() {
    return this.orderHistory$;
  }

  setOrderHistory(item: Order) {
    this.launchSnackbar(orderPlaced, close_snackbar, snackbar_duration);
    this.cartStore.deleteCartStore();
    this.router.navigate(['orders']);
    return this.orderHistory.next([...this.orderHistory.value, item]);
  }


  launchSnackbar(msg: string, action: string, duration: number) {
    this.snackbar.open(msg, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
 
}
