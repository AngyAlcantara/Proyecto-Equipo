import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonButton, 
  IonIcon 
} from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonContent, 
    IonButton, 
    IonIcon
  ]
})
export class PedidosPage {
  filter: string = 'todos';
  constructor() { }
}