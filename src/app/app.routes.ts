import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'perfil', pathMatch: 'full' },
  { 
    path: 'perfil', 
    loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage) 
  },
  { 
    path: 'datos-personales', 
    loadComponent: () => import('./pages/datos-personales/datos-personales.page').then(m => m.DatosPersonalesPage) 
  },
  { 
    path: 'cambiar-contrasena', 
    loadComponent: () => import('./pages/cambiar-contrasena/cambiar-contrasena.page').then(m => m.CambiarContrasenaPage) 
  },
  { 
    path: 'detalle-pedido', 
    loadComponent: () => import('./pages/detalle-pedido/detalle-pedido.page').then(m => m.DetallePedidoPage) 
  }
];