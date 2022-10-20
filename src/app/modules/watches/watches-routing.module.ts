import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchesComponent } from './watches.component';

const routes: Routes = [{ path: '', component: WatchesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchesRoutingModule { }
