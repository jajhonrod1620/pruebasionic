import { Injectable } from "@angular/core";
import { Restaurante } from './../clases/restaurante';


@Injectable()
export class RestauranteService{
restaurantes: Restaurante[];

    agregarRestaurante(nombre: string,
        imagenes: string[],
        rating: number,
        ubicacion: {lat:number, lng:number}){
        
        let restaurante = new Restaurante(
            nombre, imagenes, rating, ubicacion
        );

        this.restaurantes.push(restaurante);
    }
}