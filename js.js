////escribí una función calcularAñosPerro()
///que tome dos parametros (nombre y añoDeNacimiento)
///y muestre por consola un mensaje 'nombre tiene X años
///en años de humano, y X años en años de perro'
//se dice que un año humano equivale a 7 años de perro
//si los parámetros no son correctos, la función debe cortar
//su ejecución y devolver un mensaje de error

/*let nombre = prompt('Cual es tu nombre?')
let añoDeNacimiento = prompt ('En que año naciste?')

const calcularAñosPerro = (nombre, añoDeNacimiento) => {
    if(typeof nombre !== 'string' || typeof añoDeNacimiento !== 'number'){
    alert('Los datos no son correctos');
    
}else{
    edadHumana = 2023 - añoDeNacimiento;
    edadDePerro = edadHumana*7;
    alert(`Hola ${nombre}. Tu tienes ${edadHumana} años y en edad de perro tendrais ${edadDePerro} años`);
}
}
calcularAñosPerro(parseInt(añoDeNacimiento));*/


///escribir una función getSquare()
//que guarde en una variable el cuadrado de un número que reciba 
//por parametro

/*let numero = prompt('Escribe un numero')
//let numberParseado = parseInt(number)xxx
const getSquare = (number) => {
   let numeroElegido = Math.pow(number,2);
   alert(`Respuesta: ${number} al cuadrado es ${numeroElegido}`);
}
getSquare(parseInt(number));*/

const number = prompt('ecribe un numero')

const getSquare = (numeroElegido) => {
    let resultado = Math.pow(numeroElegido,2);
    alert( `Respuesta: ${numeroElegido} al cuadrado es ${resultado}`);
}

getSquare(parseInt(number));





