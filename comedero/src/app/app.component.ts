import { AutenticacionService } from './../servicios/autenticacion.service';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IniciarsesionPage } from './../pages/iniciarsesion/iniciarsesion';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  homepage = HomePage;
  iniciarSesion = IniciarsesionPage;
  @ViewChild('contenido') contenido: NavController;
  usuarioEstaConectado = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public autenticacionService: AutenticacionService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyCzoPFkv_zLRXy2HKz45WzjZYA78X21PyA",
      authDomain: "restauranteionic.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(
      usuario => {
        if(usuario != null){
          this.usuarioEstaConectado = true;
          this.contenido.setRoot(this.homepage);
        } else {
          this.usuarioEstaConectado = false;
          this.contenido.setRoot(this.iniciarSesion);
        }
      }
    )
  }

  llamarPagina(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }

  terminarSesion(){
    this.autenticacionService.terminarSesion();
    this.menuCtrl.close();
  }
}

