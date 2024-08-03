class Persona {
    constructor(name, lastName){

        this.name = name;
        this.lastName = lastName;
        
    }

    static specie = 'humano';  /// las variables declaradas con static sirven para poder acceder a ese valor fuera de la clase sin tener que instanciar la clase

    saludar = () => {
        console.log(`Hola soy ${this.name}, mucho gusto`);
    }

    getName = () => {
        console.log(`Me llamo ${ this.name}`);

    }

    despedir = () => {
        console.log(`Chao, nos vemos!!`);

    }
}


const juan = new Persona('Juan', 'Bida');   // para acceder a los metodos, si o si tendria que instanciar la clase
const lucia = new Persona('Lucia', 'Martinez');

lucia.getName();
juan.getName();

console.log(Persona.specie); // puedo acceder directo a la variable al ser static