import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'solicitar-pipa',
    loadComponent: () => import('./solicitar-pipa/solicitar-pipa.page').then( m => m.SolicitarPipaPage)
  },
  {
    path: 'mis-direcciones',
    loadComponent: () => import('./mis-direcciones/mis-direcciones.page').then( m => m.MisDireccionesPage)
  },

];
