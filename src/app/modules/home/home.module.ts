import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CardModule } from '../../shared/card/card.module';
import { SliderModule } from '../../shared/slider/slider.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    SliderModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
  ],
})
export class HomeModule {}
