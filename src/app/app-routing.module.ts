import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'electronics',
    loadChildren: () =>
      import('./modules/electronics/electronics.module').then(
        (m) => m.ElectronicsModule
      ),
  },
  {
    path: 'watches',
    loadChildren: () =>
      import('./modules/watches/watches.module').then((m) => m.WatchesModule),
  },
  {
    path: 'appliances',
    loadChildren: () =>
      import('./modules/appliances/appliances.module').then(
        (m) => m.AppliancesModule
      ),
  },
  {
    path: 'furniture',
    loadChildren: () =>
      import('./modules/furniture/furniture.module').then(
        (m) => m.FurnitureModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./modules/wishlist/wishlist.module').then(
        (m) => m.WishlistModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./modules/payment/payment.module').then((m) => m.PaymentModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./modules/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then((m) => m.OrdersModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'search-results',
    loadChildren: () =>
      import('./modules/search-results/search-results.module').then(
        (m) => m.SearchResultsModule
      ),
  },
  {
    path: 'confirm-order-details',
    loadChildren: () =>
      import(
        './modules/confirm-order-details/confirm-order-details.module'
      ).then((m) => m.ConfirmOrderDetailsModule),
      canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
