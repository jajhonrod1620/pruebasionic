import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestaurantePage } from '../pages/restaurante/restaurante';
import { AgregarRestaurantePage } from './../pages/agregar-restaurante/agregar-restaurante';
//angular maps
import { AgmCoreModule } from '@agm/core';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    MyApp,
    HomePage, AgregarRestaurantePage, RestaurantePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAogk0DQtQNLaPmSHuIpR7AcjuTEhBQ9Yw'
    }),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,  AgregarRestaurantePage, RestaurantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
