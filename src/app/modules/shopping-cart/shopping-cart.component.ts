import { Component, OnInit } from '@angular/core';
import {shoppingCart} from '../../data/cart';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems = shoppingCart;
  max = 10;
  min= 1;
  step = 1;
  thumbLabel = '';
  tickInterval = 0;
  quantityPurchased = 0;
  constructor() { }


  onSlider(index: number, item: any){
    this.cartItems[index].quantity = item;
    console.log(this.cartItems);
  }

  ngOnInit(): void {
  }

}
