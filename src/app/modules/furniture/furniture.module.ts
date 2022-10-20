import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnitureRoutingModule } from './furniture-routing.module';
import { FurnitureComponent } from './furniture.component';


@NgModule({
  declarations: [
    FurnitureComponent
  ],
  imports: [
    CommonModule,
    FurnitureRoutingModule
  ]
})
export class FurnitureModule { }
