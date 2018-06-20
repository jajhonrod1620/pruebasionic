import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nuevocorreo',
  templateUrl: 'nuevocorreo.html',
})
export class NuevocorreoPage {
  tipo:string;
  nombre:string = 'Jaime Jhon';
  de:string='jaimea@gmail.com';
  para:string = '';
  asunto:string = '';

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public viewCtrl: ViewController) {
    this.tipo = navParams.get('tipo');
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }
  
}
