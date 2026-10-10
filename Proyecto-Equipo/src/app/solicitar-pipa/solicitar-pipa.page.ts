import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { addIcons } from 'ionicons';
import {
  waterOutline,
  locationOutline,
  chevronForwardOutline,
  checkmarkCircle,
  createOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-solicitar-pipa',
  templateUrl: './solicitar-pipa.page.html',
  styleUrls: ['./solicitar-pipa.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SolicitarPipaPage {

  // Capacidad seleccionada
  capacidad: number | 'otra' = 5000;

  // Cantidad personalizada
  otraCantidad: number | null = null;

  // Indicaciones adicionales
  indicaciones: string = '';

  constructor() {

    addIcons({
      'water-outline': waterOutline,
      'location-outline': locationOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'checkmark-circle': checkmarkCircle,
      'create-outline': createOutline
    });

  }


  // Seleccionar una capacidad
  seleccionarCapacidad(cantidad: number) {

    this.capacidad = cantidad;

    // Si cambia de "Otra cantidad", borramos la cantidad personalizada
    this.otraCantidad = null;

  }


  // Seleccionar "Otra cantidad"
  seleccionarOtraCantidad() {

    this.capacidad = 'otra';

  }


  // Continuar con el pedido
  continuar() {

    let cantidadFinal: number | null;

    if (this.capacidad === 'otra') {

      cantidadFinal = this.otraCantidad;

    } else {

      cantidadFinal = this.capacidad;

    }


    // Verificar que exista una cantidad
    if (!cantidadFinal || cantidadFinal <= 0) {

      alert('Ingresa una cantidad de litros válida.');

      return;

    }


    console.log('Cantidad de agua:', cantidadFinal);
    console.log('Indicaciones:', this.indicaciones);

    alert(
      'Pedido seleccionado: ' +
      cantidadFinal +
      ' litros'
    );

  }

}