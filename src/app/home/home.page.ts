import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonMenuButton,
  IonMenu,
  IonListHeader, IonNav, IonItem, IonLabel, IonList, IonButton, IonCol, IonRow, IonGrid
} from '@ionic/angular/standalone';
import {NgOptimizedImage} from "@angular/common";
import {AppModule} from "../app.module";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NgOptimizedImage, IonImg, IonMenuButton, IonMenu, IonListHeader, IonNav, IonItem, IonLabel, IonList, IonButton, IonCol, IonRow, IonGrid, AppModule],
})
export class HomePage {
  constructor() {}
}
