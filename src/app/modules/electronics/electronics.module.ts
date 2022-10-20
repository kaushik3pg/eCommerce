import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicsComponent } from './electronics.component';
import { CardModule } from 'src/app/shared/card/card.module';

@NgModule({
  declarations: [ElectronicsComponent],
  imports: [CommonModule, ElectronicsRoutingModule, CardModule],
})
export class ElectronicsModule {}
