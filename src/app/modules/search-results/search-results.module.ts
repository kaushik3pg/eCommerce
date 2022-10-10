import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/shared/card/card.module';

const routes : Routes = [{path: '', component: SearchResultsComponent}];

@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), CardModule
  ]
})
export class SearchResultsModule { }