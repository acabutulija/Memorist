import { NgModule } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
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

@NgModule({
  declarations: [
     // Include your NavbarComponent here
    // Other components in the app
  ],
  imports: [
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    NavbarComponent

    // Other necessary modules
  ],
  providers: [
    // Services for the app
  ],
  exports: [
    NavbarComponent
  ],
  bootstrap: [
    // The main component of your app
  ]
})
export class AppModule {}
