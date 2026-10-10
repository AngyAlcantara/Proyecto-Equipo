import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'solicitar-pipa',
    loadComponent: () => import('./solicitar-pipa/solicitar-pipa.page').then( m => m.SolicitarPipaPage)
  },
  {
    path: 'mis-direcciones',
    loadComponent: () => import('./mis-direcciones/mis-direcciones.page').then( m => m.MisDireccionesPage)
  },

  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage),
  },
  {
    path: 'direccion',
    loadComponent: () => import('./pages/direccion/direccion.page').then( m => m.DireccionPage),
  },
  {
    path: 'pedidos',
    loadComponent: () => import('./pages/pedidos/pedidos.page').then( m => m.PedidosPage),
  },
];