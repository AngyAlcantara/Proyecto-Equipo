import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonButton, 
  IonIcon 
} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonContent, 
    IonButton, 
    IonIcon
  ]
})
export class InicioPage {}