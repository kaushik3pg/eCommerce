import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productList } from '../../data/products';
import { continue_shopping, no_search_results } from './../../data/constants';

interface Item {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  price: number;
  reviews: number;
  avgrating: number;
  quantity?: number;
  description: string;
  seller: string;
  services: {
    cod: string;
    return: string;
  };
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  products: Item[] = [];
  searchedProduct: string | any = '';
  searchedCategory: string | any = '';
  continueBtn = continue_shopping;
  noSearchResultsMsg = no_search_results;
  constructor(private route: ActivatedRoute, private router: Router) {}

  onContinueShopping() {
    this.router.navigate(['home']);
  }
  ngOnInit(): void {
    this.searchedProduct = this.route.snapshot.queryParamMap.get('search');
    this.searchedCategory = this.route.snapshot.queryParamMap.get('category');

    if (!this.searchedCategory && !this.searchedProduct) {
      this.products = productList;
    } else if (!this.searchedCategory && this.searchedProduct) {
      this.products = productList.filter(
        (item) =>
          item.category.includes(this.searchedProduct) ||
          item.description.includes(this.searchedProduct) ||
          item.title.includes(this.searchedProduct)
      );
    } else if (this.searchedCategory && !this.searchedProduct) {
      this.products = productList.filter(
        (item) => item.category === this.searchedCategory
      );
    } else if (this.searchedCategory && this.searchedProduct) {
      this.products = productList.filter(
        (item) =>
          item.category === this.searchedCategory &&
          (item.description.includes(this.searchedProduct) ||
            item.title.includes(this.searchedProduct))
      );
    }
  }
}
