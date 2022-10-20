import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesRoutingModule } from './appliances-routing.module';
import { AppliancesComponent } from './appliances.component';
import { CardModule } from 'src/app/shared/card/card.module';

@NgModule({
  declarations: [AppliancesComponent],
  imports: [CommonModule, AppliancesRoutingModule, CardModule],
})
export class AppliancesModule {}
