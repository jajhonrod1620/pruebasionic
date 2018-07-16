import { IniciarsesionPage } from './../pages/iniciarsesion/iniciarsesion';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  homepage = HomePage;
  iniciarSesion = IniciarsesionPage;
  @ViewChild('contenido') contenido: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  llamarPagina(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }

  terminarSesion(){
  }
}

