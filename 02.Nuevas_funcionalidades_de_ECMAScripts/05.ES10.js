const texto = '     Text  ejemplo   ';

let procesado = '';

procesado = texto.trim() // Texto sin espacios

procesado = texto.trimStart() // Elimina espacios del principio

procesado = texto.trimEnd() // Elimina espacios del final


// Flat --> Convierte en un solo array con los elementos de una variable con muhas array dentro

const array = [1, [2, 4, 'g'], [4, 5], 5];

console.log(array.flat());


// solo tiene un nivel de profundidad, si hay otro array dentro ya no funciona

const array2 = [1, [2, 4, 'g'], [4, [3, 2], 5], 5];

console.log(array2.flat());

