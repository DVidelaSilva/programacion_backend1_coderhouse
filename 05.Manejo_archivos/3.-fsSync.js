const fs = require('fs')

fs.writeFileSync('./ejemplo.txt', 'Hola como estas', 'utf-8');
if(fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);
    fs.appendFileSync('./ejemplo.txt', ' mas contenido!!', 'utf-8')
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);

    // para eliminar el archivo
    //fs.unlinkSync('./ejemplo.txt')
}

// se puede agregar el directorio en el path de writeFileSync, pero la carpeta debe estar creada