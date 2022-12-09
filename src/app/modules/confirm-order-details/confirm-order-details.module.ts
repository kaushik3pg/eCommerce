import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmOrderDetailsRoutingModule } from './confirm-order-details-routing.module';
import { ConfirmOrderDetailsComponent } from './confirm-order-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ConfirmOrderDetailsComponent],
  imports: [
    CommonModule,
    ConfirmOrderDetailsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    MatCardModule,
  ],
})
export class ConfirmOrderDetailsModule {}
