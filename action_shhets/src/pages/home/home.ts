import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public ActionSheetController: ActionSheetController) {

  }

  mostrarListadeAcciones(){
    let listadeAcciones = this.ActionSheetController.create({
      title: 'Lista de acciones',
      buttons:[
        {
        text: 'Option 1',
        handler: ()=>{console.log('Opción 2');}
        },
        {
        text: 'Option 2',
        role: 'destructive',
        handler: ()=>{console.log('Opción 2');}
        },
        {
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{console.log('Cancelar');}
        },

    ]
    });
    listadeAcciones.present();
  }

}
 