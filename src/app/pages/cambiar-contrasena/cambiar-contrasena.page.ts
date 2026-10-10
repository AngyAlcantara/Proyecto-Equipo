import { Component, OnInit } from '@angular/core';
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
export class CambiarContrasenaPage implements OnInit {
  passActual: string = '';
  passNueva: string = '';
  passConfirm: string = '';

  passwordAlmacenada: string = '123456'; // Contraseña por defecto

  constructor(private router: Router) {}

  ngOnInit() {
    // Cargar contraseña guardada si existe
    const passGuardada = localStorage.getItem('usuario_password');
    if (passGuardada) {
      this.passwordAlmacenada = passGuardada;
    }
  }

  cambiarPassword() {
    // 1. Validar contraseña actual
    if (this.passActual !== this.passwordAlmacenada) {
      alert('La contraseña actual es incorrecta.');
      return;
    }

    // 2. Validar que la nueva contraseña y su confirmación coincidan
    if (this.passNueva !== this.passConfirm) {
      alert('La nueva contraseña y su confirmación no coinciden.');
      return;
    }

    // 3. Guardar la nueva contraseña en localStorage
    localStorage.setItem('usuario_password', this.passNueva);

    alert('¡Contraseña cambiada con éxito!');
    
    // Limpiar el formulario
    this.passActual = '';
    this.passNueva = '';
    this.passConfirm = '';

    // Redirigir a la vista de perfil o datos personales
    this.router.navigate(['/datos-personales']);
  }
}
