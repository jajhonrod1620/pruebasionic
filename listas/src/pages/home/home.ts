import { ContactoPage } from './../contacto/contacto';
import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactoPage = ContactoPage;

  contactos = [
    {
      nombre: 'Andres Alvarez',
      telefono: '0985273940',
      correo: 'andres@alvarez.com',
      imagen: 'avatar-ts-bullseye.png'
    },
    {
      nombre: 'Beatriz Buendia',
      telefono: '0985273940',
      correo: 'beatriz@buendia.com',
      imagen: 'avatar-ts-buzz.png'
    },
    {
      nombre: 'Carlos Castro',
      telefono: '0985273940',
      correo: 'carlos@castro.com',
      imagen: 'avatar-ts-hamm.png'
    },
    {
      nombre: 'Diego Diaz',
      telefono: '0985273940',
      correo: 'diego@diaz.com',
      imagen: 'avatar-ts-woody.png'
    },
    {
      nombre: 'Felipe Flores',
      telefono: '0985273940',
      correo: 'felipe@flores.com',
      imagen: 'avatar-ts-rex.png'
    },
    {
      nombre: 'Gabriel Garcia',
      telefono: '0985273940',
      correo: 'gabriel@garcia.com',
      imagen: 'avatar-ts-potatohead.png'
    }
  ]
}
