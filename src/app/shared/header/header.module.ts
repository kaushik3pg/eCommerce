import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SearchbarModule } from '../searchbar/searchbar.module';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NavbarModule, MatIconModule, MatMenuModule, SearchbarModule, RouterModule, MatBadgeModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
