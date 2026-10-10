import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import {
  waterOutline,
  homeOutline,
  locationOutline,
  cubeOutline,
  personOutline,
  chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      'water-outline': waterOutline,
      'home-outline': homeOutline,
      'location-outline': locationOutline,
      'cube-outline': cubeOutline,
      'person-outline': personOutline,
      'chevron-forward-outline': chevronForwardOutline
    });
  }

  ngOnInit() {
  }

}