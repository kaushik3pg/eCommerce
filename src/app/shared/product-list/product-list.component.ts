
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


interface WishItem {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity?: number;
  date: string;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() products: WishItem[] = [];

@Input() primaryBtnLabel = '';
@Input() secondaryBtnLabel = '';

@Input() info: string = '';

@Output() primaryActionEmitter = new EventEmitter();
@Output() secondaryActionEmitter = new EventEmitter();


primaryAction(item: WishItem){
  this.primaryActionEmitter.emit(item);
}

secondaryAction(item: WishItem){
  this.secondaryActionEmitter.emit(item);
}
  constructor() { }

  ngOnInit(): void {
  }

}
