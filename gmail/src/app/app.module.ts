import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InboxPage } from './../pages/inbox/inbox';
import { CorreosProvider } from '../providers/correos/correos';
import { CorreoPage } from './../pages/correo/correo';

@NgModule({
  declarations: [
    MyApp,
    HomePage, InboxPage, CorreoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, InboxPage, CorreoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CorreosProvider
  ]
})
export class AppModule {}
