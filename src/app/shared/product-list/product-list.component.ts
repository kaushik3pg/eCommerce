import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() products: {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews:number,
  avgrating: number,
}[] = [];

@Input() buttons: string[] = [];
@Input() info: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
