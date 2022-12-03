import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Route,
  RouterStateSnapshot,
} from '@angular/router';
import { ValidateLoginService } from '../services/validate-login.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  let validateLogin: ValidateLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
    // route = new ActivatedRouteSnapshot();
    // state = new RouterStateSnapshot();
    validateLogin = TestBed.inject(ValidateLoginService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('canActivate method', () => {
   // guard.isUserLoggedIn = false;
   // const spy = spyOn(guard, 'canActivate');
    //guard.canActivate(route, state);
   // expect(spy).toHaveBeenCalled();
   // expect(guard.isUserLoggedIn).toEqual(false);
    //expect(spy).toEqual(false);


    validateLogin.getLoginStatus().subscribe(loginStatus => {
      guard.isUserLoggedIn = loginStatus;
    });
        expect(guard.canActivate(route, state)).toBe(false);
  });
});
