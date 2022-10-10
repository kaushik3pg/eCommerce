import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productList } from 'src/app/data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: {
    id: number;
    imgUrl: string;
    category: string;
    title: string;
    price: number;
    reviews: number;
    avgrating: number;
  } = {
    id: 2,
    imgUrl: 'assets/images/2-medium.png',
    category: 'Electronics',
    title: 'PC All-in-one',
    price: 1832,
    reviews: 78,
    avgrating: 3.5,
  };
  quantity = 1;
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = '';
  tickInterval = 0;

  productId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}
  onSlider() {}

  onContinueShopping(){
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.productId);
    this.product = (productList.filter(
      (product) => product.id === this.productId
    ))[0];
    console.log(this.product);
  }
}
