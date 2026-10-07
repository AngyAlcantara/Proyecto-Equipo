import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class DatosPersonalesPage {
  editando: boolean = false;

  // Variables iniciales basadas en el wireframe
  nombre: string = 'UsuarioX';
  telefono: string = '271 XXXX';
  correo: string = 'correo@email.com';

  activarEdicion() {
    this.editando = true;
  }

  guardarCambios() {
    this.editando = false;
    alert('¡Datos personales actualizados correctamente!');
  }
}
