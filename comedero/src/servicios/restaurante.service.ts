import { Injectable } from "@angular/core";
import { Restaurante } from '../clases/restaurante';


@Injectable()
export class RestauranteService{
restaurantes: Restaurante[] =[];

    agregarRestaurante(nombre: string,
        imagenes: string[],
        rating: number,
        ubicacion: {lat:number, long:number}){
        
        let restaurante = new Restaurante(
            nombre, imagenes, rating, ubicacion
        );

        this.restaurantes.push(restaurante);
    }

    cargarRestaurantes(){
        return this.restaurantes.slice();
    }
}