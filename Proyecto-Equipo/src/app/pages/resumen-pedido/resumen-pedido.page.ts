import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-resumen-pedido',
  templateUrl: './resumen-pedido.page.html',
  styleUrls: ['./resumen-pedido.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon
  ]
})
export class ResumenPedidoPage implements OnInit {

  constructor() {
    addIcons({
      'arrow-back-outline': arrowBackOutline
    });
  }

  ngOnInit() {}

}