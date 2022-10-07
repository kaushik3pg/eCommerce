import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,MatSliderModule,FormsModule
  ],
})
export class ShoppingCartModule {}
