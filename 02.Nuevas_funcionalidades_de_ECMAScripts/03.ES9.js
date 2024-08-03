const persona1 = {
    nombre: 'Pedro',
    apellido: 'Lopez',
    edad: 28
};

const persona2 = {
    nombre: 'Lucia',
    apellido: 'Perez',
    edad: 27
}


// spread destructuring

let { nombre, apellido } = persona2;

console.log(nombre);
console.log(apellido);

// rest

//let persona3 = persona1; esto reemplaza el valor de los parametros del objeto


let persona3 = {...persona1};  // esto realiza una copia de los parametros del objeto

persona3.nombre = 'Luis'

// Pedro y luis

console.log(persona1.nombre);


let { edad, ...nombreyapellido } = persona1
console.log(edad);
console.log(nombreyapellido);