import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { shoppingCart } from '../../data/cart';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: {
    id: number;
    imgUrl: string;
    category: string;
    title: string;
    price: number;
    reviews: number;
    avgrating: number;
    quantity: number;
  }[] = shoppingCart;
  
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = '';
  tickInterval = 0;
  quantityPurchased = 0;
  totalAmount: number = 0;
  constructor(private router : Router) {}

  onSlider(index: number, item: any) {
    this.cartItems[index].quantity = item;
    this.totalAmount = 0;
    this.calculateTotalAmount();
    console.log(this.totalAmount);
  }

  calculateTotalAmount() {
    this.cartItems.forEach((item) => {
      this.totalAmount += item.quantity * item.price;
    });
  }
  onContinueShopping(){
    this.router.navigate(['home']);
  }
  ngOnInit(): void {
    this.calculateTotalAmount();
  }
}
