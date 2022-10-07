import { Component, OnInit } from '@angular/core';
import { productList } from 'src/app/data/products';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
products = productList;
  constructor() { }

  ngOnInit(): void {
  }

}
