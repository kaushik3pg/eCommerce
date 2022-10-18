import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedAddressesComponent } from './saved-addresses.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: SavedAddressesComponent }];

@NgModule({
  declarations: [SavedAddressesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SavedAddressesComponent],
})
export class SavedAddressesModule {}
