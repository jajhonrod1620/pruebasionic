import { Injectable } from "@angular/core";
import { Restaurante } from '../clases/restaurante';
import { Storage } from '@ionic/storage';


@Injectable()
export class RestauranteService{
restaurantes: Restaurante[] =[];

constructor(private storage: Storage) {}

    agregarRestaurante(nombre: string,
        imagenes: string[],
        rating: number,
        ubicacion: {lat:number, lng:number}){
        
        let restaurante = new Restaurante(
            nombre, imagenes, rating, ubicacion
        );

        this.restaurantes.push(restaurante);
        this.storage.set('restaurantes', this.restaurantes);
    }

    cargarRestaurantes(){
        return this.restaurantes.slice();
    }

    inicializarRestaurantes(){
        return this.storage.get('restaurantes')
                .then((restaurantes: Restaurante[]) => {
                    if(restaurantes == null){
                        this.restaurantes = [];
                    } else {
                        this.restaurantes = restaurantes;
                    }
                    return this.restaurantes.slice();
                })
                .catch(error => {console.log(error)});
    }
}