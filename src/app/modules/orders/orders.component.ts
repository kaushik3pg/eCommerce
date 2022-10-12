import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productList } from 'src/app/data/products';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  products = productList;
  constructor(private router: Router) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }
  ngOnInit(): void {}
}
