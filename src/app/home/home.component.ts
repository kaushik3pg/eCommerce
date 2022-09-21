import { Component, OnInit } from '@angular/core';
import {productList} from '../data/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = productList;
  constructor() { }

  ngOnInit(): void {
  }

}
