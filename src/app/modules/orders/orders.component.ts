import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productList } from 'src/app/data/products';
import { CreateOrderHistoryService } from 'src/app/services/create-order-history.service';
import {orders_summary, continue_shopping, no_order_history} from './../../data/constants'
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
export interface Order {
  cart: CartItem[],
  date : string,
 }
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  products = [];
  pageHeading = orders_summary;
  continueBtn = continue_shopping;
  noOrderHistoryMsg = no_order_history;
  previousOrders: Order[] = []

  constructor(private router: Router, private orderHistory: CreateOrderHistoryService) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }
  ngOnInit(): void {
    this.orderHistory.getOrderHistory().subscribe(currentOrderHistory => {
      this.previousOrders = currentOrderHistory;
    })
  }
}
