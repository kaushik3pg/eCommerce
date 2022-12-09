import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { SaveAddressInformationService } from 'src/app/services/save-address-information.service';
import { SavePaymentInformationService } from 'src/app/services/save-payment-information.service';
import {
  orderConfirmation,
  placeOrder,
  updateCartItems,
  updateAddressDetails,
  updatePaymentDetails,itemsOrdered
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
export interface AddressItem {
  id: number,
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
  selector: 'app-confirm-order-details',
  templateUrl: './confirm-order-details.component.html',
  styleUrls: ['./confirm-order-details.component.css'],
})
export class ConfirmOrderDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  selectedAddress!: AddressItem;
  selectedPayment!: PaymentItem;
  pageHeading = orderConfirmation;
  proceedBtn = placeOrder;
  viewCartBtn = updateCartItems;
  updateAddressBtn = updateAddressDetails;
  updatePaymentBtn = updatePaymentDetails;
  orderedItemsHeading = itemsOrdered;
  constructor(
    private router: Router,
    private cartStore: AddToCartService,
    private addressStore: SaveAddressInformationService,
    private paymentStore: SavePaymentInformationService
  ) {}

  onProductCardClickNavigateTo(id: number) {
    this.router.navigate(['product', id]);
  }

  onViewCart() {
    this.router.navigate(['cart']);
  }
  onUpdateAddress() {
    this.router.navigate(['checkout']);
  }
  onUpdatePayment() {
    this.router.navigate(['checkout']);
  }
  onProceed() {
    //show order confirmed and save it in order history(you may need a service for that!!)
  }

  ngOnInit(): void {
    this.cartStore.getCartStore().subscribe((currentCart) => {
      this.cartItems = currentCart;
    });
    this.addressStore.getSelectedAddressStore().subscribe((currentAddress) => {
      this.selectedAddress = currentAddress;
    });
    this.paymentStore.getPaymentStore().subscribe((currentPaymentInfo) => {
      this.selectedPayment = currentPaymentInfo;
    });
  }
}
