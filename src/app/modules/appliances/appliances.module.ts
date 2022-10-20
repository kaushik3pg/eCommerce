import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesRoutingModule } from './appliances-routing.module';
import { AppliancesComponent } from './appliances.component';


@NgModule({
  declarations: [
    AppliancesComponent
  ],
  imports: [
    CommonModule,
    AppliancesRoutingModule
  ]
})
export class AppliancesModule { }
