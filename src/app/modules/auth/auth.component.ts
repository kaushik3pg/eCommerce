import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ValidateLoginService } from '../../services/validate-login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor(
    private router: Router,
    private validateLogin: ValidateLoginService
  ) {}

  ngOnInit(): void {
    this.subscription = this.validateLogin
      .getLoginStatus()
      .subscribe((loginStatus) => {
        console.log('Login status is : ', loginStatus);
        !loginStatus ? null : this.router.navigate(['']);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
