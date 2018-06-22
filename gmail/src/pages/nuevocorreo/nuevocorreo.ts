import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Toast } from '../../providers/correos/toast';
import { CorreosProvider } from './../../providers/correos/correos';

@IonicPage()
@Component({
  selector: 'page-nuevocorreo',
  templateUrl: 'nuevocorreo.html',
})
export class NuevocorreoPage {
  tipo:string;
  correo:any;
  nombre:string = 'Jaime Jhon';
  de:string='jaimea@gmail.com';
  para:string = '';
  asunto:string = '';
  nuevoCorreo:string = '';

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public toastCtrl: Toast,
      public correos: CorreosProvider) {
    this.tipo = navParams.get('tipo');
    this.correo = navParams.get('correo');
    if(this.tipo == 'Reply'){
      this.para = this.correo.direccion;
      this.asunto = 'Re:' + this.correo.asunto;
    }
    if(this.tipo == 'Forward'){
      this.asunto = this.correo.asunto;
    }
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

  enviarCorreo(){
    let correo = {
      nombre:this.nombre,
      de: this.de,
      para: this.para,
      asunto: this.asunto,
      mensaje: this.nuevoCorreo,
      fecha: new Date()
    }
    console.log('Mensaje Enviado');
    console.log('De: '+correo.nombre + '' + correo.de);
    console.log('Para: '+correo.para);
    console.log('Asunto: '+correo.asunto);
    console.log('Mensaje: '+correo.mensaje);
    console.log('Fecha: '+correo.fecha);
    this.correos.enviados.push(correo);
    this.viewCtrl.dismiss();
    this.toastCtrl.crearToast('Correo Enviado');
  }
  
}
