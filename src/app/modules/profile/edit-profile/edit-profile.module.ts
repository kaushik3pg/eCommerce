import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: EditProfileComponent }];
@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class EditProfileModule {}
