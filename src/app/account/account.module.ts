import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class AccountModule { }
