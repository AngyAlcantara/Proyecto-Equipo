import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput
} from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
  imports: [
    IonContent,
    IonButton,
    IonInput,
    CommonModule,
    FormsModule
  ]
})
export class RecuperarContrasenaPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}