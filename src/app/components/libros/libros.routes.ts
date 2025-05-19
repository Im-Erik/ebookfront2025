import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./libros.component'),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../libro-details/libro-details.component'),
  }
];
export default routes;
