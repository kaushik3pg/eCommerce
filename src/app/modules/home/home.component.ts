import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slides } from '../../data/slides';
import { productList } from '../../data/products';

import { ValidateLoginService } from '../../services/validate-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  products = productList;
  slides = slides;
  subscription! : Subscription;
  constructor(
    private router: Router,
    private validateLogin: ValidateLoginService
  ) {}

  ngOnInit(): void {
    // this.subscription = this.validateLogin.getLoginStatus().subscribe((loginStatus) => {
    //   console.log("Login status is : ", loginStatus);
    //   !loginStatus ? this.router.navigate(['account']) : null;
    // });
  }

  ngOnDestroy(): void{
    // this.subscription.unsubscribe();
  }
}
