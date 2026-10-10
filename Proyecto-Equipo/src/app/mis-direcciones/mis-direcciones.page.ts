import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { addIcons } from 'ionicons';
import {
  locationOutline,
  addOutline,
  checkmarkCircle,
  chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-mis-direcciones',
  templateUrl: './mis-direcciones.page.html',
  styleUrls: ['./mis-direcciones.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MisDireccionesPage {

  // Dirección seleccionada
  direccionSeleccionada: number | null = null;

  // Mostrar u ocultar formulario
  mostrarFormulario: boolean = false;

  // Datos de la nueva dirección
  direccion: string = '';
  referencia: string = '';
  telefono: string = '';
  indicaciones: string = '';

  constructor() {

    addIcons({
      'location-outline': locationOutline,
      'add-outline': addOutline,
      'checkmark-circle': checkmarkCircle,
      'chevron-forward-outline': chevronForwardOutline
    });

  }


  // Seleccionar una dirección
  seleccionarDireccion(numero: number) {

    this.direccionSeleccionada = numero;

  }


  // Mostrar formulario
  nuevaDireccion() {

    this.mostrarFormulario = true;

  }


  // Guardar nueva dirección
  guardarDireccion() {

    if (
      this.direccion === '' ||
      this.telefono === ''
    ) {

      alert('Completa la dirección y el teléfono.');

      return;

    }

    alert('Dirección guardada correctamente.');

    this.mostrarFormulario = false;

    this.direccion = '';
    this.referencia = '';
    this.telefono = '';
    this.indicaciones = '';

  }

}

