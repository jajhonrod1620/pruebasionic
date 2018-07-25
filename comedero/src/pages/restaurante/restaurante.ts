import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Restaurante } from './../../clases/restaurante';

@IonicPage()
@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html',
})
export class RestaurantePage {
  restaurante: Restaurante

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController ) {
      this.restaurante = navParams.get('restaurante');
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }
}
