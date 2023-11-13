import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  standalone: true,
  styleUrls: ['./note-item.component.scss'],
  imports: [
    IonicModule
  ]
})
export class NoteItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  protected readonly Title = Title;
}
