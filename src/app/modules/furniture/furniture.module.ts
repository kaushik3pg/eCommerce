import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnitureRoutingModule } from './furniture-routing.module';
import { FurnitureComponent } from './furniture.component';
import { CardModule } from 'src/app/shared/card/card.module';

@NgModule({
  declarations: [FurnitureComponent],
  imports: [CommonModule, FurnitureRoutingModule, CardModule],
})
export class FurnitureModule {}
