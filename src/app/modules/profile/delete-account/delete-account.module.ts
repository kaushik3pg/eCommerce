import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteAccountComponent } from './delete-account.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: DeleteAccountComponent }];


@NgModule({
  declarations: [
    DeleteAccountComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes) , FormsModule,MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],exports:[DeleteAccountComponent]
})
export class DeleteAccountModule { }
