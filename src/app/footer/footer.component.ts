import { Component, OnInit } from '@angular/core';
import {IonCol, IonFooter, IonItem, IonLabel} from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonFooter,
    IonLabel,
    IonCol,
    IonItem,
  ],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
