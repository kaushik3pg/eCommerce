import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: WishItem[] = [];

  @Input() primaryBtnLabel = '';
  @Input() secondaryBtnLabel = '';

  @Input() info: string = '';

  @Output() primaryActionEmitter = new EventEmitter();
  @Output() secondaryActionEmitter = new EventEmitter();

  primaryAction(event: any, item: WishItem) {
    event.stopPropagation();
    this.primaryActionEmitter.emit(item);
  }

  secondaryAction(event: any, item: WishItem) {
    event.stopPropagation();
    this.secondaryActionEmitter.emit(item);
  }
  constructor(private router: Router) {}

  onProductCardClickNavigateTo(id: number) {
    this.router.navigate(['product', id]);
  }
  ngOnInit(): void {}
}
