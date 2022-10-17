import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productList } from 'src/app/data/products';
import {orders_summary, continue_shopping, no_order_history} from './../../data/constants'

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


  constructor(private router: Router) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }
  ngOnInit(): void {}
}
