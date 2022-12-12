import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  address_info_saved,
  close_snackbar,
  snackbar_duration,
} from '../data/constants';
import { userDetails } from '../data/user';
export interface AddressItem {
  id: number,
  house: number;
  street: number | string;
  area: string;
  city: string;
  state: string;
  pincode: number;
}

@Injectable({
  providedIn: 'root',
})
export class SaveAddressInformationService {
  private selectedAddressStore = new BehaviorSubject<AddressItem>({
    id: 0,
    house: 0,
    street: 0,
    area: '',
    city: '',
    state: '',
    pincode: 0,
  });
  private selectedAddressStore$ = this.selectedAddressStore.asObservable();

  private allAddressesStore = new BehaviorSubject<AddressItem[]>(userDetails.addresses);
  private allAddressesStore$ = this.allAddressesStore.asObservable();


  constructor(private snackbar: MatSnackBar) {}

  getSelectedAddressStore() {
    return this.selectedAddressStore$;
  }
  setSelectedAddressStore(item: AddressItem) {
    this.selectedAddressStore.next(item);
    this.launchSnackbar(address_info_saved, close_snackbar, snackbar_duration);
  }

  getAllAddressesStore() {
    return this.allAddressesStore$;
  }
  setAllAddressesStore(item: AddressItem) {
    this.allAddressesStore.next([...this.allAddressesStore.value,item]);
    this.launchSnackbar(address_info_saved, close_snackbar, snackbar_duration);
  }


  launchSnackbar(msg: string, action: string, duration: number) {
    this.snackbar.open(msg, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
