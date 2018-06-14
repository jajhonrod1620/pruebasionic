import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';


@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  listaCorreos: Object;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public correos:CorreosProvider) {
        this.listaCorreos = correos.lista;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
