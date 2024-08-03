
let vari = 11;

let valor1 = vari?? 'Vino nula';
let valor2 = vari || "vino nula"

// console.log('valor 1 es igual a: ' + valor1);
// console.log('valor 2 es igual a: ' + valor2);


// uso de un metodo privado
// se puede usar solo dentro de la misma clase asignandole el metodo a otra clase que
// tambien esta dentro de esta clase


class Persona {

    #mayorEdad = 18;  // metodo privado es con #

    constructor(name, age){
        this.name = name
        this.age = age
    }

    obtenerNombre(){
        return this.name;
    }

    #MetodoPrivado(){
        console.log('Metodo privado');
    }

    usoMetodoPrivado(){
        this.#MetodoPrivado();
    }
}


const persona = new Persona('Luis', 25)

console.log(persona.usoMetodoPrivado());
//console.log(persona.metodoPrivado()); // no se puede llamar dirtectamente un metodo privado

