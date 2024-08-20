const numeros = [1,2,3,4,5]
const texto =["uno", "dos","tres" ,"uno", "cuatro" ,"uno"]
const mixto =["hola", 23, true, "adios", 61, false]


//Función sumar

function suma(a,b) {
    if(typeof a !== "number" || typeof b !== "number"){//si son nºs devolverá la suma si no, mensaje error
        return "Deben ser dos números"

    }
    return a + b

}
let resultado = suma(3,4)
console.log(resultado)

//validar palabra
function validarPalabra(palabra) {
    // Verifica si la palabra está en el array 'texto'
    return texto.includes(palabra); // Devuelve true o false directamente
}

const buscarPalabra = "uno";
const existe = validarPalabra(buscarPalabra);

if (existe) {
    console.log(`La palabra "${buscarPalabra}" existe en el array.`);
} else {
    console.log(`La palabra "${buscarPalabra}" no existe en el array.`);
}


//Funcion validar suma

function validarSuma(numeros, sumaEsperada) {
    // Inicializa una variable para almacenar la suma
    let sumaActual = 0;
    
    // Recorre cada número en el array y suma sus valores
    for (let i = 0; i < numeros.length; i++) {
        sumaActual += numeros[i];
    }
    
    // Compara la suma calculada con la suma esperada
    return sumaActual === sumaEsperada;
}
const sumaEsperada = ""//poner la suma esperada
const resultados = validarSuma(numeros, sumaEsperada);
console.log(resultados);  // Imprime 'true' o 'false'