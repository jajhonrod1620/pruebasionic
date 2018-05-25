import { ElementoPage } from './../elemento/elemento';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//2da forma navegacion
elementoPage = ElementoPage;

  //primera forma navegacion
  // constructor(public navCtrl: NavController) {}

  // agregarPagina(){
  //   this.navCtrl.push(ElementoPage, {numero: 1});
  // }
  
}
