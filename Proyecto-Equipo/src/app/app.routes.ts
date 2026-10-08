import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'recuperar-contrasena',
    loadComponent: () =>
      import('./pages/recuperar-contrasena/recuperar-contrasena.page')
        .then((m) => m.RecuperarContrasenaPage),
  },  {
    path: 'resumen-pedido',
    loadComponent: () => import('./pages/resumen-pedido/resumen-pedido.page').then( m => m.ResumenPedidoPage)
  },

];