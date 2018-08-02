import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AgregarRestaurantePage } from './../agregar-restaurante/agregar-restaurante';
import { Restaurante } from '../../clases/restaurante';
import { RestauranteService } from '../../servicios/restaurante.service';
import { RestaurantePage } from '../restaurante/restaurante';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  agregarRestaurantePage = AgregarRestaurantePage;
  restaurantes:Restaurante[] = [];

  constructor(public navCtrl: NavController,
    public restauranteService: RestauranteService,
    public modalCtrl: ModalController) {}
    
  ngOnInit() {
    this.restauranteService.inicializarRestaurantes()
        .then((restaurantes: Restaurante[])=> {
          this.restaurantes = restaurantes;
        })
        .catch(error => {console.log(error)});
  }

  ionViewWillEnter(){
    this.restaurantes = this.restauranteService.cargarRestaurantes();
  }
  mostrarRestaurante(restaurante: Restaurante, rid: number){
    let modal = this.modalCtrl
        .create(RestaurantePage, 
          {restaurante: restaurante, rid: rid});
    modal.present();
    modal.onDidDismiss(() => {
      this.restaurantes = this.restauranteService.cargarRestaurantes();
    })
  }
}
