const fs = require('fs')

fs.writeFile('./ejemploCallback.txt', 'Hola desde Callback', (error) => {
    if(error) return console.log('No se pudo escribir el archivo');
    fs.readFile('./ejemploCallback.txt', 'utf-8', (error, resultado) => {
        if(error) return console.log('No se pudo leeer el archivo');
        console.log(resultado);
        fs.appendFile('./ejemploCallback.txt', ' Mas contenido al callback', (error => {
            if(error) return console.log('No se pudo actualizar el archivo');
            fs.readFile('./ejemploCallback.txt', 'utf-8', (error, contenido) => {
                if(error) return console.log(contenido);
                console.log(contenido);
            })
        }))
    })
})