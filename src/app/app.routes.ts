import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'libros',
    loadComponent: () => import('./components/libros/libros.component'),
  },
  {
    path: 'libro-details/:id',
    loadComponent: () =>
      import('./components/libro-details/libro-details.component'),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout/checkout.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component'),
  },
  {
    path: '', redirectTo:'libros', pathMatch:'full'
  },
  {
    path: '**', redirectTo: 'libros', pathMatch: 'full'
  },
];
