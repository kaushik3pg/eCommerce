import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'edit-profile',
        loadChildren: () =>
          import('./edit-profile/edit-profile.module').then(
            (m) => m.EditProfileModule
          ),
      },
      {
        path: 'saved-addresses',
        loadChildren: () =>
          import('./saved-addresses/saved-addresses.module').then(
            (m) => m.SavedAddressesModule
          ),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import('./change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: 'delete-account',
        loadChildren: () =>
          import('./delete-account/delete-account.module').then(
            (m) => m.DeleteAccountModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
