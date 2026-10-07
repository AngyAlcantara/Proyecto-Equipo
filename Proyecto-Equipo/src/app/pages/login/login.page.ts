import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonInput,
  IonLabel,
  IonButton,
  IonCheckbox
} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonInput,
    IonLabel,
    IonButton,
    IonCheckbox,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}