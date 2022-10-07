import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, MatTabsModule, MatIconModule],
})
export class ProfileModule {}
