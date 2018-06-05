import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {}

    mostrarAlerta(){
      let alerta = this.alertCtrl.create();

      alerta.setTitle('Paises de Visitados');
      alerta.addInput(
        {
          type:'checkbox',
          label: 'Argentina',
          value: 'argentina'
        }
      );

      alerta.addInput(
        {
          type:'checkbox',
          label: 'Colombia',
          value: 'colombia'
        }
      );

      alerta.addInput(
        {
          type:'checkbox',
          label: 'Mexico',
          value: 'mexico'
        }
      );

      alerta.addButton('Cancelar');

      alerta.addButton(
        {
          text: 'Ok',
          handler: data => {console.log('El país de origen es: '+ data)}
        }
      )

      alerta.present();
    }
  }
