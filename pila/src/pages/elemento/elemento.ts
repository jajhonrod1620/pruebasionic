import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    selector: 'page-elemento',
    templateUrl: 'elemento.html'
})

export class ElementoPage {
numeroPag: number;

    constructor(public navCtrl: NavController, navParams: NavParams){
        this.numeroPag = navParams.get('numero');
    }
    
    volver(){
        this.navCtrl.pop();
    }

    agregarPagina(){
        this.navCtrl.push(ElementoPage, {numero:this.numeroPag + 1});
    }
}