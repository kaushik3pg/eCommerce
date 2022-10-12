import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ChangePasswordComponent } from '../modules/profile/change-password/change-password.component';

export interface CartItem {
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
export class AddToCartService {
  private cartStore = new BehaviorSubject([{}]);
  private cartStore$ = this.cartStore.asObservable();

  constructor() {}

  checkCartStateForEmptyInitialValue() {
    return this.cartStore.value.length === 1 &&
      !Object.keys(this.cartStore.value[0]).length
      ? true
      : false;
  }

  getCartStore() {
    return this.cartStore$;
  }

  setCartStore(item: {}) {
    let updatedCart: {}[] = [];
    this.checkCartStateForEmptyInitialValue()
      ? (updatedCart = [item])
      : (updatedCart = [...this.cartStore.value, item]);

    return this.cartStore.next(updatedCart);
  }
}
