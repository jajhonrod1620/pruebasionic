import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { TestPage } from './../test/test';

@Component({
    selector: 'page-elemento',
    templateUrl: 'elemento.html'
})

export class ElementoPage {
numeroPag: number;
elementoPage = ElementoPage;
testPage = TestPage;

    constructor(public navCtrl: NavController, navParams: NavParams){
        this.numeroPag = navParams.get('numero');
    }
}