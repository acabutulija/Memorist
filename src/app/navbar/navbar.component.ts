import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, ]
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
