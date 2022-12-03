import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  payment_info_saved,
  close_snackbar,
  snackbar_duration,
} from '../data/constants';


export interface PaymentItem {
  cardHolderName: string;
  cardNumber: number;
  cardType: string;
  cardExpiry: Date;
}

@Injectable({
  providedIn: 'root',
})
export class SavePaymentInformationService {
  private paymentStore = new BehaviorSubject<PaymentItem>({ cardHolderName: '', cardNumber: 0, cardType: '', cardExpiry: new Date() });
  private paymentStore$ = this.paymentStore.asObservable();

  constructor(private snackbar: MatSnackBar) {}

  getPaymentStore() {
    return this.paymentStore$;
  }
  setPaymentStore(item: PaymentItem) {
    this.paymentStore.next(item);
    this.launchSnackbar(payment_info_saved, close_snackbar, snackbar_duration);
  }
  launchSnackbar(msg: string, action: string, duration: number) {
    this.snackbar.open(msg, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
