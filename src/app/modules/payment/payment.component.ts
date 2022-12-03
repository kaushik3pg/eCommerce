import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetails } from 'src/app/data/user';
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

export interface AddressItem {
  house: number,
  street: number,
  area: string,
  city: string,
  state: string,
  pincode: number,
}
export interface PaymentItem {
  cardHolderName: string;
  cardNumber: number;
  cardType: string;
  cardExpiry: Date;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  addresses = userDetails.addresses;
  toggleAddressBtn = addNewAddress;
  showNewAddressForm = false;

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
      cardExpiry: ['', Validators.compose([Validators.required])],
    });
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private addressStore: SaveAddressInformationService,
    private paymentStore: SavePaymentInformationService
  ) {}
  onSaveAddress() {
    this.addressStore.setAddressStore(this.selectedAddress);
    this.toggleNewAddressForm();
  }
  // onSaveOrderDetails() {
  //   this.paymentStore.setPaymentStore(this.selectedPayment);
  // }
  onConfirmDetails() {
    this.paymentStore.setPaymentStore(this.selectedPayment);
    this.router.navigate(['confirm-order-details']);
  }
  ngOnInit(): void {
    this.createForm();
    this.createPaymentForm();
    this.paymentStore.getPaymentStore().subscribe((currentPaymentInfo) => {
      this.selectedPayment = currentPaymentInfo;
    });
    this.addressStore.getAddressStore().subscribe((currentAddressInfo) => {
      this.selectedAddress = currentAddressInfo;
    });
  }
}
