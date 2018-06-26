import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from './../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';



@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  listaCorreos: Object;
  correoPage = CorreoPage;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public correos:CorreosProvider,
      public modalCtrl: ModalController) {
        this.listaCorreos = correos.lista;
  }


  verCorreo(correo){
    this.navCtrl.push(this.correoPage, correo);
  }

  nuevoCorreo(){
    let modal = this.modalCtrl.
      create(
        NuevocorreoPage,
         {tipo: 'Nuevo Correo',correo: ''});
    modal.present();
  }


}
