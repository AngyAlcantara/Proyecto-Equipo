import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class CambiarContrasenaPage {
  passActual: string = '';
  passNueva: string = '';
  passConfirm: string = '';

  constructor(private router: Router) {}

  cambiarPassword() {
    if (this.passNueva !== this.passConfirm) {
      alert('Las contraseñas no coinciden. Inténtalo de nuevo.');
      return;
    }

    alert('¡Contraseña cambiada con éxito!');
    this.router.navigate(['/datos-personales']);
  }
}
