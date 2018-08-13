import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, 
  ToastController, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { RestauranteService } from './../../servicios/restaurante.service';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-agregar-restaurante',
  templateUrl: 'agregar-restaurante.html',
})
export class AgregarRestaurantePage {
  ubicacion = {
    lat: 0,
    lng: 0
  }
  ubicacionLista = false;
  imagenes: string[] = [];

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private geolocation: Geolocation,
      public toastCtrl: ToastController,
      public camera: Camera,
      public restauranteService: RestauranteService,
      public viewCtrl: ViewController,
      private file: File ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarRestaurantePage');
  }

  localizar(){
    this.geolocation.getCurrentPosition({ timeout: 3000})
        .then(info =>{
          this.ubicacion.lat = info.coords.latitude;
          this.ubicacion.lng = info.coords.longitude;
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
          //this.imagenes.push(imagenInfo);
          // /file/storage/native/0/nombre.jpg
          let path = imagenInfo.subtsr(0,
            imagenInfo.lastIndexOf('/' + 1));
          let nombre = imagenInfo.substr(
            imagenInfo.lastIndexOf('/' + 1));
          
          let nuevoNombre = new Date().getMilliseconds() + '.jpg';
          this.file.moveFile(path, nombre,cordova.file.dataDirectory, nuevoNombre)
              //.then(info: Entry) =>{ ???
              .then((info) =>{
                this.imagenes.push(imagenInfo);
                this.camera.cleanup();
              })
              .catch(error => {
                let toast = this.toastCtrl.create({
                  message: 'Ocurrió un error. File.movFile',
                  duration: 3000
                })
                toast.present();
                this.camera.cleanup();
              });
        })
        .catch(error => {
          let toast = this.toastCtrl.create({
            message: 'Ocurrió un error. Camera.GetPicture',
            duration: 3000
          })
          toast.present();
          this.camera.cleanup();
        })
  }

  agregarRestaurante(formulario: NgForm){
    this.restauranteService.agregarRestaurante(
      formulario.value.nombre, this.imagenes, formulario.value.rating, this.ubicacion);
      formulario.reset();
      this.ubicacionLista = false;
      this.imagenes= [];
      this.viewCtrl.dismiss();

  }
    
}
