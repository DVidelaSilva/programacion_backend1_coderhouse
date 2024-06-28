function mostrarLista (lista = []) {   // = [] es una ventaja de JS que permite asignar un valor por defecto en caso de involar la funcion sin nada

    if ( lista.length == 0){
        return  'lista vacia';
    }
    lista.forEach(elemento => {
        console.log(elemento);
    })

    let cantElementos = lista.length;

    return cantElementos

}

let lista1 = [1, 2, 3, 4];
let lista2 = [55, 8, 102, 4];
let lista3 = [];


let resultado1 = mostrarLista(lista1)
console.log(`El largo de la lista es: ${resultado1}`);

let resultado2 = mostrarLista(lista2)
console.log(`El largo de la lista es: ${resultado2}`);

let resultado3 = mostrarLista(lista3)
console.log(`El largo de la lista es: ${resultado3}`);

let resultadoVacio = mostrarLista()
console.log(`Resultado vacio es igual: ${resultadoVacio}`);