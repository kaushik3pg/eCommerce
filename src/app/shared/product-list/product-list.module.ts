import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
