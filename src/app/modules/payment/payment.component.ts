import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveAddressInformationService } from 'src/app/services/save-address-information.service';
import { SavePaymentInformationService } from 'src/app/services/save-payment-information.service';
import {
  delete_,
  edit,
  save_and_select_address,
  addNewAddress,
  showSavedAddress,
  checkoutInformation,
  confirmOrderDetails,
} from './../../data/constants';
// import {FormControl} from '@angular/forms';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker} from '@angular/material/datepicker';

// import * as _moment from 'moment';

// import {default as _rollupMoment, Moment} from 'moment';

// const moment = _rollupMoment || _moment;


// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'MM/YYYY',
//   },
//   display: {
//     dateInput: 'MM/YYYY',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };



export interface AddressItem {
  id: number;
  house: number;
  street: number | string;
  area: string;
  city: string;
  state: string;
  pincode: number;
}
export interface PaymentItem {
  cardHolderName: string;
  cardNumber: number;
  cardType: string;
  cardCVV: number;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],  
  // providers: [

  //   {
  //     provide: DateAdapter,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  //   },

  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  // ],

})
export class PaymentComponent implements OnInit {
  addresses: AddressItem[] = [];
  toggleAddressBtn = addNewAddress;
  showNewAddressForm = false;

  selectedOption!: number;
  selectedAddress!: AddressItem;
  selectedPayment!: PaymentItem;

  addressForm!: FormGroup;
  paymentForm!: FormGroup;

  deleteBtn = delete_;
  editBtn = edit;
  saveAddressBtn = save_and_select_address;
  pageHeading = checkoutInformation;
  confirmOrderDetailsBtn = confirmOrderDetails;

  toggleNewAddressForm() {
    this.showNewAddressForm = !this.showNewAddressForm;
    this.showNewAddressForm
      ? (this.toggleAddressBtn = showSavedAddress)
      : (this.toggleAddressBtn = addNewAddress);
  }

  createForm = () => {
    this.addressForm = this.fb.group({
      id: [''],
      house: ['', Validators.compose([Validators.required])],
      street: ['', Validators.compose([Validators.required])],
      area: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      pincode: ['', Validators.compose([Validators.required])],
    });
  };
  createPaymentForm = () => {
    this.paymentForm = this.fb.group({
      cardHolderName: ['', Validators.compose([Validators.required])],
      cardNumber: ['', Validators.compose([Validators.required])],
      cardType: ['', Validators.compose([Validators.required])],
      cardCVV: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(3)])],
    });
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private addressStore: SaveAddressInformationService,
    private paymentStore: SavePaymentInformationService
  ) {}

  onSaveAddress() {
    this.selectedOption = this.addresses.length + 1;
    this.selectedAddress = {
      ...this.addressForm.value,
      id: this.selectedOption,
    };
    this.addressStore.setSelectedAddressStore(this.selectedAddress);
    this.addressStore.setAllAddressesStore(this.selectedAddress);
    this.addressStore.getAllAddressesStore().subscribe((allAddresses) => {
      this.addresses = allAddresses;
    });
    this.toggleNewAddressForm();
    this.addressForm.reset();
  }

  onChangeAddress(event: any) {
    this.selectedAddress = this.addresses.filter(
      (address) => address.id === event.value
    )[0];
    this.addressStore.setSelectedAddressStore(this.selectedAddress);
  }

  onConfirmDetails() {
    this.paymentStore.setPaymentStore(this.selectedPayment);
    this.router.navigate(['confirm-order-details']);
  }
  // setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
  //   const ctrlValue = this.paymentForm.get('cardExpiry')?.value!;
  //   ctrlValue.month(normalizedMonthAndYear.month());
  //   ctrlValue.year(normalizedMonthAndYear.year());
  //   this.paymentForm.get('cardExpiry')?.setValue(ctrlValue);
  //   datepicker.close();
  // }

  ngOnInit(): void {
    this.createForm();
    this.createPaymentForm();
    this.paymentStore.getPaymentStore().subscribe((currentPaymentInfo) => {
      this.selectedPayment = currentPaymentInfo;
    });
    this.addressStore
      .getSelectedAddressStore()
      .subscribe((currentAddressInfo) => {
        this.selectedAddress = currentAddressInfo;
        this.selectedOption = currentAddressInfo.id;
      });
    this.addressStore.getAllAddressesStore().subscribe((allAddresses) => {
      this.addresses = allAddresses;
    });
  }
}
