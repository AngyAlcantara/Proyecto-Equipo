import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PerfilPage {

  cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      alert('Sesión cerrada correctamente.');
      // Aquí puedes redirigir a la pantalla de login cuando tu compañero la tenga lista
    }
  }
}
