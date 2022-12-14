import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateLoginService } from 'src/app/services/validate-login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user: { email: string; password: string } = {
    email: '',
    password: '',
  };
  constructor(private router: Router, private validateLogin: ValidateLoginService) {}

  ngOnInit(): void {
    localStorage.removeItem('email');
  }

  onSignin() {
    localStorage.setItem('email', this.user.email);
    this.validateLogin.setLoginStatus(true);
    this.router.navigate(['']);
  }
}
