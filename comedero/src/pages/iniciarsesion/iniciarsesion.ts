import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from './../../servicios/autenticacion.service';

@IonicPage()
@Component({
  selector: 'page-iniciarsesion',
  templateUrl: 'iniciarsesion.html',
})
export class IniciarsesionPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public autenticacionService: AutenticacionService,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarsesionPage');
  }

  iniciarSesion(formulario: NgForm){

  }

  registrarUsuario(formulario: NgForm){
    this.autenticacionService.registrarUsuario(
      formulario.value.correo,
      formulario.value.clave
    )
    .then(info => console.log(info))
    .catch(error => {
      let alerta = this.alertCtrl.create({
        title: 'Ocurrió un error',
        message: 'Error registrando usuario ' + error,
        buttons: ['OK']
      })
      alerta.present();
    });
  }

}
