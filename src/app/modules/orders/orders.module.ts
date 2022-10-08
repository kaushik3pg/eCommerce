import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ProductListModule } from 'src/app/shared/product-list/product-list.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule, ProductListModule, MatButtonModule
  ]
})
export class OrdersModule { }
