import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slides } from '../../data/slides';
import { productList } from '../../data/products';

import { ValidateLoginService } from '../../services/validate-login.service';
import {features_products} from './../../data/constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  products = productList;
  slides = slides;
  subscription! : Subscription;

  pageHeading = features_products;
  constructor(
    private router: Router,
    private validateLogin: ValidateLoginService
  ) {}

  ngOnInit(): void {
    // this.subscription = this.validateLogin.getLoginStatus().subscribe((loginStatus) => {
    //   !loginStatus ? this.router.navigate(['account']) : null;
    // });
  }

  ngOnDestroy(): void{
    // this.subscription.unsubscribe();
  }
}
