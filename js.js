////escribí una función calcularAñosPerro()
///que tome dos parametros (nombre y añoDeNacimiento)
///y muestre por consola un mensaje 'nombre tiene X años
///en años de humano, y X años en años de perro'
//se dice que un año humano equivale a 7 años de perro
//si los parámetros no son correctos, la función debe cortar
//su ejecución y devolver un mensaje de error

let nombre = prompt('Cual es tu nombre?')
let añoDeNacimiento = prompt ('En que año naciste?')
let nacimientoParseado = parseInt(añoDeNacimiento)

const calcularAñosPerro = (nombre, añoDeNacimiento) =>{
    if(typeof nombre !== 'string' || typeof añoDeNacimiento !== 'number'){
    alert('Los datos no son correctos');
    return;
}else{
    edadHumana = 2023 - nacimientoParseado;
    edadDePerro = edadHumana*7;
    alert(`Hola ${nombre}. Tu tienes ${edadHumana} años y en edad de perro tendrais ${edadDePerro} años`)
    return;
}
}
