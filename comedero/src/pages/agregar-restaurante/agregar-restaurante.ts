import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-agregar-restaurante',
  templateUrl: 'agregar-restaurante.html',
})
export class AgregarRestaurantePage {
  ubicacion = {
    lat: 0,
    long: 0
  }
  ubicacionLista = false;
  imagenes: String[] = [];

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private geolocation: Geolocation,
      public toastCtrl: ToastController,
      public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarRestaurantePage');
  }

  localizar(){
    this.geolocation.getCurrentPosition({ timeout: 3000})
        .then(info =>{
          this.ubicacion.lat = info.coords.latitude;
          this.ubicacion.long = info.coords.longitude;
          this.ubicacionLista = true;

        })
        .catch(error => {
          let toast= this.toastCtrl.create({
            message: 'No se pudo encontrar ubicacion',
            duration: 2000
          });
          toast.present();
        })
  }

  tomarFoto(){
    this.camera.getPicture({
      correctOrientation: true
    })
        .then(imagenInfo => {
          this.imagenes.push(imagenInfo);
        })
        .catch(error => {})
  }

}
