import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent
{
    nombre: string="Iron Man";
    edad: number=45;

    get nombreCapitalizado()
    {
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre():string
    {
        return `Su nombre es: ${this.nombre}, Edad: ${this.edad}`; 
    }
    cambiarNombre():void
    {
        this.nombre = "SpiderMan";
    }
    cambiarEdad():void
    {
        this.edad = 30;
    }
}