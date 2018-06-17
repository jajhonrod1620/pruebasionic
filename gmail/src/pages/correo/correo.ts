import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {

  correoActual;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.correoActual = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

}
