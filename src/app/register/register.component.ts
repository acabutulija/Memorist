import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    IonicModule,
    NavbarComponent,
    FormsModule
  ]
})
export class RegisterComponent  implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  // async register() {
  //   try {
  //     const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
  //     if (userCredential) {
  //       this.router.navigate(['account/login']);
  //     }
  //   } catch (error) {
  //     console.error("Login error", error);
  //   }
  // }
  ngOnInit() {}

}
