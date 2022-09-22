import { Component, OnInit, Input } from '@angular/core';
import { ValidateLoginService } from 'src/app/services/validate-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() menu: { title: string; route: string }[] = [];
  loginDone: boolean = false;
  
  constructor(private validateLogin: ValidateLoginService ) {}

  ngOnInit(): void {
    this.validateLogin.getLoginStatus().subscribe(loginStatus => {
      this.loginDone = loginStatus;
    })
  }
}
