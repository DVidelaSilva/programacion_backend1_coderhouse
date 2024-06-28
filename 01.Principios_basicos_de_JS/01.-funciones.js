
// declaracion funcion normal
function suma(val1, val2)
{
    let suma = val1 + val2;
    return suma
}



// declaracion funcion tipo arrow function
// una arrow function es una funcion anonima, a la que se le asigna un nombre de variable para poder identificarla
const suma = (val1, val2) => {
    let suma = val1 + val2;
    return suma
}



// Forma corta de la arrow function, la particularidad
// de estas funciones es que no requiere el return, se puede pasar directo
const suma = (val1, val2) => val1 + val2;


// en una arrow function si solo recibida un parametro, puede ir sin los parentesis
const restoUno = val => val -1;