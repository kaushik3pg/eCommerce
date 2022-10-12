import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { menu } from 'src/app/data/menu';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { ValidateLoginService } from 'src/app/services/validate-login.service';

const fadeInOut = trigger('fadeInOut', [
  state('in', style({ opacity: 1, position: 'absolute', zIndex: 0 })),
  transition('void => *', [style({ opacity: 0 }), animate('300ms ease-in')]),
  transition('* => void', [animate('300ms ease-out'), style({ opacity: 0 })]),
]);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInOut],
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuItems: { title: string; route: string }[] = menu;
  loginDone: boolean = false;
  cartItems: {}[] = [];
  showSearchbar: boolean = false;

  subscriptionLogin!: Subscription;
  subscriptionCart!: Subscription;
  constructor(
    private router: Router,
    private validateLogin: ValidateLoginService,
    private cartStore: AddToCartService
  ) {}

  onSignout() {
    this.validateLogin.setLoginStatus(false);
  }

  onSignin() {
    this.router.navigate(['auth']);
  }

  onToggleSearchbar(event: any) {
    event.stopPropagation();
    this.showSearchbar = !this.showSearchbar;
  }

  onUserPageLaunch(showPage: string) {
    this.router.navigate([showPage]);
  }

  @HostListener('window:click', ['$event'])
  handleOutsideClick(event: any) {
    event.stopPropagation();
    this.showSearchbar = false;
  }

  ngOnInit(): void {
    this.subscriptionLogin = this.validateLogin
      .getLoginStatus()
      .subscribe((loginStatus) => {
        this.loginDone = loginStatus;
      });
    this.subscriptionCart = this.cartStore
      .getCartStore()
      .subscribe((currentCart) => {
        if (currentCart.length === 1 && !Object.keys(currentCart[0]).length) {
          this.cartItems = [];
        } else this.cartItems = currentCart;
      });
  }

  ngOnDestroy() {
    this.subscriptionLogin.unsubscribe();
    this.subscriptionCart.unsubscribe();
  }
}
