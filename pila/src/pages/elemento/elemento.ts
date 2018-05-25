import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    selector: 'page-elemento',
    templateUrl: 'elemento.html'
})

export class ElementoPage {
numeroPag: number;
elementoPage = ElementoPage;

    constructor(public navCtrl: NavController, navParams: NavParams){
        this.numeroPag = navParams.get('numero');
    }
}