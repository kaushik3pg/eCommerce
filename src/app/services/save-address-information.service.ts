import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  address_info_saved,
  close_snackbar,
  snackbar_duration,
} from '../data/constants';
export interface AddressItem {
  house: number,
  street: number,
  area: string,
  city: string,
  state: string,
  pincode: number,
}



@Injectable({
  providedIn: 'root'
})
export class SaveAddressInformationService {
  private addressStore = new BehaviorSubject<AddressItem>({
    house: 0,
    street: 0,
    area: '',
    city: '',
    state: '',
    pincode: 0,
  });
  private addressStore$ = this.addressStore.asObservable();

  constructor(private snackbar: MatSnackBar) { }

  getAddressStore() {
    return this.addressStore$;
  }
  setAddressStore(item: AddressItem) {
    this.addressStore.next(item);
    this.launchSnackbar(
      address_info_saved,
      close_snackbar,
      snackbar_duration
    );
  }
  launchSnackbar(msg: string, action: string, duration: number) {
    this.snackbar.open(msg, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
