import { Component, OnInit } from '@angular/core';
import { productList } from '../../data/products';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  products = productList;
  constructor() { }

  ngOnInit(): void {
  }

}
