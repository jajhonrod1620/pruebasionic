import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from './../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {
  listaCorreos;
  correoPage = CorreoPage;

  constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        public correos: CorreosProvider,
        public modalCtrl: ModalController,
        public storage: Storage) {

          //this.listaCorreos = correos.enviados;
        }

  //gancho del ciclo de vida
  ionViewWillEnter(){
    this.storage.get('correosEnviados')
        .then((correosEnviados) => {
          if(correosEnviados == null){
            this.listaCorreos = [];
          } else {
            this.listaCorreos = correosEnviados;
            this.correos.enviados = this.listaCorreos;
          }
        })
        .catch(error => {console.log(error);})
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
