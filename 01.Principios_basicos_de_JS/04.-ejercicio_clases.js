class Contador {
    constructor(responsable){
        this.responsable = responsable;
        this.conteo = 0;
        Contador.contadorGlobal++;
    }

    static contadorGlobal = 0;

    getResponsable = () => {
        return this.responsable
    }

    contar = () => {
        this.conteo++;
        Contador.contadorGlobal++;
    }

    getConteoIndividual = () => {
        return this.conteo;
    }

    getContadorGlobal = () => {
        return Contador.contadorGlobal;
    }
}

const julia = new Contador('Julia') // individual y global
const pedro = new Contador('Pedro') // individual arranca con 1 y el global con 2 /// individual 2 y global a 3

pedro.contar();
pedro.contar();

console.log(`Pedro cuenta individual ${pedro.getConteoIndividual()} y global ${pedro.getContadorGlobal()}`);
console.log(`Julia cuenta individual ${julia.getConteoIndividual()} y global ${julia.getContadorGlobal()}`);