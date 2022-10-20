import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicsComponent } from './electronics.component';


@NgModule({
  declarations: [
    ElectronicsComponent
  ],
  imports: [
    CommonModule,
    ElectronicsRoutingModule
  ]
})
export class ElectronicsModule { }
