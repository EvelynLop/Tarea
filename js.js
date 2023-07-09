////escribí una función calcularAñosPerro()
///que tome dos parametros (nombre y añoDeNacimiento)
///y muestre por consola un mensaje 'nombre tiene X años
///en años de humano, y X años en años de perro'
//se dice que un año humano equivale a 7 años de perro
//si los parámetros no son correctos, la función debe cortar
//su ejecución y devolver un mensaje de error

//no funciona

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


//=======================================================


///escribir una función getSquare()
//que guarde en una variable el cuadrado de un número que reciba 
//por parametro


/* const number = prompt('ecribe un numero')

const getSquare = (numeroElegido) => {
    let resultado = Math.pow(numeroElegido,2);
    alert( `Respuesta: ${numeroElegido} al cuadrado es ${resultado}`);
}

getSquare(parseInt(number)); */


//=======================================================


//escribi una función returnLongest() que tome como parametros dos string
//y retorne el string más largo (4)
//si ambas string son igualmente largas, devuelve un mensaje 'They're the same'(3)
//si una de las string no es válida. devuelve un mensaje 'One of the values is not a string' (2)
//si ambos valores son inválidos, devuelve 'None of the values is a string' (1)

const returnLongest = (primerString, segundoString) => {
    if(typeof primerString !== 'string' && typeof segundoString !== 'string'){
        alert ('None of the values is a string');
    }else if(typeof primerString !== 'string' || typeof segundoString !== 'string'){
        alert('One of the values is not a string');
    }else if(primerString.length === segundoString.length){
        alert('They are the same');
    }else if(primerString.length > segundoString.length){
        alert (`${primerString}`);
    }else if(primerString.length < segundoString.length){
        alert (`${segundoString}`);
    }
    console.log(returnLongest)
}
returnLongest('eve','javascript');



//=======================================================

//escribí una función countVowels() que reciba un string
//y devuelva ( decidí vos como mostrar el resultado )
//la cantidad de vocales en la palabra


/* let vocales = ['a','e','i','o','u'];

const countVowels = (palabraEscrita) => {
    let count = 0;
    for (let i of palabraEscrita.toLowerCase()){
        if(vocales.includes(i)){
            count++;
            alert(`esta palabra tiene ${count} vocales  `)
        }
    }
  
}
console.log(countVowels('eve'))  */








