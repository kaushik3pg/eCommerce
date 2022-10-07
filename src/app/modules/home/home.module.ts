import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CardModule } from '../../shared/card/card.module';
import { SliderModule } from '../../shared/slider/slider.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule, SliderModule
  ],
})
export class HomeModule {}
