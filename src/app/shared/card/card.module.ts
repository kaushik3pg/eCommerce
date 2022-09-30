import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatMenuModule],
  exports: [CardComponent],
})
export class CardModule {}
