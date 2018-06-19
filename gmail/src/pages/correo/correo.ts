import { NuevocorreoPage } from './../nuevocorreo/nuevocorreo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {

  correoActual;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public modalCtrl: ModalController) {
    this.correoActual = navParams.data;
  }

  mostrarModal(tipo:string){
    let modal = this.modalCtrl.create(NuevocorreoPage, {tipo:tipo});
    modal.present();
  }

}
