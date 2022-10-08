import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';

import { ProductListModule } from 'src/app/shared/product-list/product-list.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    ProductListModule,
    MatButtonModule,
  ],
})
export class WishlistModule {}
