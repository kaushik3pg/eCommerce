import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { productCategories } from 'src/app/data/product-categories';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  
  categories = productCategories;
  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['search-results']);
  }



  ngOnInit(): void {}
}
