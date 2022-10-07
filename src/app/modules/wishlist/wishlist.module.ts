import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';

import { ProductListModule } from 'src/app/shared/product-list/product-list.module';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
ProductListModule
  ],
})
export class WishlistModule {}
