import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonInput, 
  IonButton, 
  IonIcon 
} from '@ionic/angular';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonContent, 
    IonInput, 
    IonButton, 
    IonIcon
  ]
})
export class DireccionPage {}