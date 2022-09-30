import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
