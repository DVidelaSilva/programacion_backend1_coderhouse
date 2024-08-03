const fs = require('fs');
const crypto = require('crypto');

class UserManager {
    constructor(path){
        this.path = path;        
    }

    async agregarUsuario(usuario){
        if(
            !usuario.nombre || 
            !usuario.apellido || 
            !usuario.password || 
            !usuario.nombreUsuario
        ){
            return console.log('Usuario Incompleto');
        }

        const { nombre, apellido, password, nombreUsuario } = usuario;
        const usuarios = await this.obtenerUsuarios();
        const passwordSecurizada = await this.securizarPassword(password); 
        const nuevoUsuario = {
            nombre, 
            apellido,
            password: passwordSecurizada,
            nombreUsuario
        }

        usuarios.push(nuevoUsuario);
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios), 'utf-8')  
    };

    async obtenerUsuarios(){
        try {
            const resultado = await fs.promises.readFile(this.path, 'utf-8');
            const usuarios = JSON.parse(resultado);
            return usuarios;
        } catch (error){
            return[];
        }
    };

    async securizarPassword(password){
        const hash = crypto.createHash('sha256'); //Se crea un algoritmo para hacer hash
        hash.update(password); // se pasa el passsword del usuario y se pasa al algoritmo, luego se actualiza la pass ya hasheada
        const passwordSecurizada = hash.digest('hex'); // se convierde el pass hasheado en un hexadecimal
        return passwordSecurizada; // se devuelve el pass hasheado
    };

    async validarUsuario(nombreUsuario, password){
        const users = await this.obtenerUsuarios();
        const user = users.find(u => u.nombreUsuario === nombreUsuario);
        if(!user){
            return console.log('El usuario no existe');
        }
        const bdPassword = user.password;
        const passwordSecurizada = await this.securizarPassword(password);
        if(bdPassword === passwordSecurizada){
            console.log('Logueado correctamente');
        } 
        else {
            console.log('La contraseña es incorrecta');
        }
    }
}

const test = async () => {
    const userManager = new UserManager('./user.json');
    await userManager.agregarUsuario({
        nombre: 'Diego',
        apellido: 'Videla',
        password: '123456789',
        nombreUsuario: 'DAVS'
    });

    await userManager.agregarUsuario({
        nombre: 'Fernando',
        apellido: 'Giraudo',
        password: '987654321',
        nombreUsuario: 'fgiraudo'
    });

    console.log('usuario: DAVS contraseña: 123456789');
    await userManager.validarUsuario('DAVS', '123456789')

    console.log('usuario: DAVS contraseña: hola');
    await userManager.validarUsuario('otracosa', 'hola')
};

test();