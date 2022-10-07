import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [SliderComponent],
})
export class SliderModule {}
