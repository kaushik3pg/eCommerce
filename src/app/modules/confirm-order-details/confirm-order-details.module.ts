import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmOrderDetailsRoutingModule } from './confirm-order-details-routing.module';
import { ConfirmOrderDetailsComponent } from './confirm-order-details.component';


@NgModule({
  declarations: [
    ConfirmOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    ConfirmOrderDetailsRoutingModule
  ]
})
export class ConfirmOrderDetailsModule { }
