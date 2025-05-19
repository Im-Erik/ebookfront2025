import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'libros',
    loadChildren:() => import('./components/libros/libros.routes'),
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
