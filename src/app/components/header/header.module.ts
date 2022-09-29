import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarModule } from 'src/app/features/navbar/navbar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NavbarModule, MatIconModule, MatMenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
