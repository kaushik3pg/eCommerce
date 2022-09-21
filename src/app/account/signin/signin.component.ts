import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  onSignin() {
    
  }
}
