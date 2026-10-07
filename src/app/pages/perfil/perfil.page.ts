import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PerfilPage implements OnInit {
  // Valores por defecto
  nombre: string = 'UsuarioX';
  telefono: string = '271 XXXX';

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  // Si usas Ionic, este ciclo de vida se ejecuta cada vez que entras a la pantalla
  ionViewWillEnter() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    const usuarioGuardado = localStorage.getItem('usuario_datos');
    if (usuarioGuardado) {
      const datos = JSON.parse(usuarioGuardado);
      this.nombre = datos.nombre || this.nombre;
      this.telefono = datos.telefono || this.telefono;
    }
  }

  cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      alert('Sesión cerrada correctamente.');
    }
  }
}
