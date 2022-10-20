import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchesRoutingModule } from './watches-routing.module';
import { WatchesComponent } from './watches.component';


@NgModule({
  declarations: [
    WatchesComponent
  ],
  imports: [
    CommonModule,
    WatchesRoutingModule
  ]
})
export class WatchesModule { }
