const fs = require('fs')
const fechaActual = new Date().toLocaleString();

fs.writeFile('./fecha_hora.txt', fechaActual, (error) => {
    if(error) return console.log('No se pudo escribir el archivo');
    console.log('Escribiendo fecha y hora....');
    fs.readFile('./fecha_hora.txt', 'utf-8', (error, resultado) => {
        if(error) return console.log('No se pudo leer el archivo');
        console.log(resultado);
    })
})