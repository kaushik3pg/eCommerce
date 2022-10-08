import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule, DirectivesModule
  ],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}
