import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from './../correo/correo';



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
      public correos:CorreosProvider) {
        this.listaCorreos = correos.lista;
  }


  verCorreo(correo){
    this.navCtrl.push(this.correoPage, correo);
  }


}
