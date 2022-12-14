import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateLoginService } from '../services/validate-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isUserLoggedIn: boolean = false;
  constructor (private router: Router, private validateLogin: ValidateLoginService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
 if(!localStorage.getItem('email')){
  this.router.navigate(['auth']);
 }
   

   return !!localStorage.getItem('email');
  }
  
}
