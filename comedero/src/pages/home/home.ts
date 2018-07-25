import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarRestaurantePage } from './../agregar-restaurante/agregar-restaurante';
import { Restaurante } from '../../clases/restaurante';
import { RestauranteService } from '../../servicios/restaurante.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  agregarRestaurantePage = AgregarRestaurantePage;
  restaurantes:Restaurante[] = [];

  constructor(public navCtrl: NavController,
    public restauranteService: RestauranteService) {

  }

  ionViewWillEnter(){
    this.restaurantes = this.restauranteService.cargarRestaurantes();
  }

}
