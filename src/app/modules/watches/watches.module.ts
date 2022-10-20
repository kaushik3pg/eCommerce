import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchesRoutingModule } from './watches-routing.module';
import { WatchesComponent } from './watches.component';
import { CardModule } from 'src/app/shared/card/card.module';

@NgModule({
  declarations: [WatchesComponent],
  imports: [CommonModule, WatchesRoutingModule, CardModule],
})
export class WatchesModule {}
