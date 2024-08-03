const objetos = 
[
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        peras: 1,
        carne: 6,
        jugos: 1,
        dulces: 4
    },
    
]


const productos = []

/* objetos.forEach( elemento => {
    productos.push(Object.keys(elemento))
})

console.log(productos); */


objetos.forEach( elemento => {
    productos.push(...Object.keys(elemento))
})

const productosUnicos = productos.reduce( (acc, item) => {  // acc -> array
    if ( !acc.includes(item) ) {
        acc.push(item);
    }
    return acc;
}, [])

const cantidadProductos = [];

objetos.forEach(elemento => {
    cantidadProductos.push(...Object.values(elemento))
})

let total = 0;

//const totalProductos = cantidadProductos.reduce( function(a, b){ return a + b}, 0)

const totalProductos = cantidadProductos.reduce((acc, valor) => {
    acc = acc + valor;
    return acc
}, total)

console.log(cantidadProductos);
console.log(totalProductos);