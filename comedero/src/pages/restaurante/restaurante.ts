import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Restaurante } from './../../clases/restaurante';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html',
})
export class RestaurantePage {
  restaurante: Restaurante

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private socialSharing: SocialSharing ) {
      this.restaurante = navParams.get('restaurante');
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

  compartirConWhatsApp(){
    let mensaje = this.restaurante.nombre;
    let url = "http://www.google.com/maps/@"
              + this.restaurante.ubicacion.lat + ","
              + this.restaurante.ubicacion.lng + ",9z?hl=es";
    this.socialSharing.shareViaWhatsApp(mensaje, this.restaurante.imagenes[0], url);
  }
}
