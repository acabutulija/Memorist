import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  standalone: true,
  styleUrls: ['./new-note.component.scss'],
  imports: [
    IonicModule,
    NavbarComponent,
  ]
})
export class NewNoteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
