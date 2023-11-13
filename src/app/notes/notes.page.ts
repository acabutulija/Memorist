import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NavbarComponent} from "../navbar/navbar.component";
import {NoteItemComponent} from "../note-item/note-item.component";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, NoteItemComponent]
})
export class NotesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
