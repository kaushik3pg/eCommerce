import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, ReactiveFormsModule, FormsModule ],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}
