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
  IonToolbar,
} from "@ionic/angular/standalone";
import {FooterComponent} from "./footer/footer.component";
import {IonicModule} from "@ionic/angular";
@NgModule({
  declarations: [

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
    IonicModule.forRoot(),
    NavbarComponent,
    FooterComponent,
  ],
  providers: [

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
  bootstrap: [

  ]
})
export class AppModule {}
