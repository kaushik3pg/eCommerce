import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { menu } from 'src/app/data/menu';
import { ValidateLoginService } from 'src/app/services/validate-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  menuItems: {title:string, route: string}[] = menu;
  loginDone: boolean = false;
  subscription! : Subscription;
  constructor(private validateLogin: ValidateLoginService) { }

  onSignout(){
    this.validateLogin.setLoginStatus(false);
  }

  ngOnInit(): void {
   this.subscription =  this.validateLogin.getLoginStatus().subscribe(loginStatus => {
      this.loginDone = loginStatus;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
