import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {}

    mostrarAlerta(){
      let alerta = this.alertCtrl.create({
        title: 'Este es el título',
        subTitle: 'Este es el subtítulo',
        message: 'Este es el mensaje',
        buttons: ['OK']
      });
    }
  }
