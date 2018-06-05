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
        inputs: [
          {
            name:'nombre',
            placeholder: 'escribe nombre'
          }
        ],        
        message: 'Este es el mensaje',
        buttons: [{
          text:'Guardar',
          handler: (data) => {console.log(data.nombre);}
        },
        {
          text:'Cancelar',
          handler: () => {console.log('cancelar');}
        }]
      });

      alerta.present();
    }
  }
