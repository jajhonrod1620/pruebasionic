import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AgregarRestaurantePage } from './../agregar-restaurante/agregar-restaurante';
import { Restaurante } from '../../clases/restaurante';
import { RestauranteService } from '../../servicios/restaurante.service';
import { RestaurantePage } from './../../../../restaurantes/src/pages/restaurante/restaurante';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  agregarRestaurantePage = AgregarRestaurantePage;
  restaurantes:Restaurante[] = [];

  constructor(public navCtrl: NavController,
    public restauranteService: RestauranteService,
    public modalCtrl: ModalController) {

  }

  ionViewWillEnter(){
    this.restaurantes = this.restauranteService.cargarRestaurantes();
  }
  mostrarRestaurante(restaurante: Restaurante){
    let modal = this.modalCtrl
        .create(RestaurantePage, {restaurante: restaurante});
    modal.present();
  }
}
