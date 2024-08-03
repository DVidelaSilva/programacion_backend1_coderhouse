const dividir = (dividendo, divisor) => {
    return new Promise( (resolve, reject) => {
        if(divisor === 0 ){
            reject('No se puede divir por 0')
        } else {
            resolve(dividendo/divisor)
        }
    })
};

const suma = async (num1, num2) => {
    return new Promise((resolve, reject)=> {
        if(num1 === 0 || num2 === 0){
            reject('Operacion invalida')
        }
        if(num1 + num2 < 0){
            reject('La calculadora solo debe devolver valores positivos')
        }
        let total = num1 + num2;
        resolve(total)
    })
};


const resta = async (num1, num2) => {
    return new Promise((resolve, reject)=> {
        if(num1 === 0 || num2 === 0){
            reject('Operacion invalida')
        }
        if(num1 - num2 < 0){
            reject('La calculadora solo debe devolver valores positivos')
        }
        let result = num1 - num2;
        resolve(result)
    })
}

const multiplicacion = async (num1, num2) => {
    return new Promise((resolve, reject)=> {
        if(num1 < 0 || num2 < 0){
            reject('Operacion invalida')
        }
        if(num1 * num2 < 0){
            reject('La calculadora solo debe devolver valores positivos')
        }
        let resultado = num1 * num2;
        resolve(resultado)
    })
}


//*operacion es el callback
const calculos = async (num1, num2,operacion) => {
    try {
        const resultado = await operacion(num1, num2);
        console.log(`El resultado de la operacion es: ${resultado}`);

    } catch (error) {
        console.log("error");
        console.log(error);
    }

}

calculos(10,2,dividir)
calculos(10,2,multiplicacion)
calculos(10,2,suma)
calculos(10,22,resta)
