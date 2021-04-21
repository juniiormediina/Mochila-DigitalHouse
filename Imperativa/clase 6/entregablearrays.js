/*Usando sólo .pop() y .push(), crear una función que reciba un array de 4 elementos por parámetro y 
retorne un array con los elementos invertidos en su orden: Ej [1,2,3,4] retorna [4,3,2,1]*/

let numero = [1, 2, 3, 4];

function arrayinvertido(numero) {
  {
    let otrosnumeros = [];
    otrosnumeros.push(numero.pop());
    otrosnumeros.push(numero.pop());
    otrosnumeros.push(numero.pop());
    otrosnumeros.push(numero.pop());
    return otrosnumeros;
  }
}

console.log(arrayinvertido(numero));

/*Crear una función que recibe un array de 4 elementos con números enteros y 
devuelve uno que contenga sólo los números pares, si los hubiera. Ej [1,2,3,4] retorna [2,4]*/

let array2 = [10, 11, 12, 13];

function nPares(array2) {
  let array3 = [];
  if (array2[0] % 2 === 0) {
    array3.push(array2[0]);
  }
  if (array2[1] % 2 === 0) {
    array3.push(array2[1]);
  }
  if (array2[2] % 2 === 0) {
    array3.push(array2[2]);
  }
  if (array2[3] % 2 === 0) {
    array3.push(array2[3]);
  }
  return array3;
}

console.log(nPares(array2));

/*Crear una función que recibe 2 parámetros, un texto con un tipo de dato de JS y  un array de 4 elementos; 
retorna un booleano que indica si todos los elementos son del tipo de dato que se envió por parámetro. Ej: tipoArray(“number”, [1,2,3,4]) retorna true; 
tipoArray(“number”, [1,2,”hola”,,4]) retorna false.*/

let array4 = [1, "hola", 3, 4];

function tipoArray(number, array4) {
  if (typeof array4[0] != "number") {
    return false;
  }

  if (typeof array4[1] != "number") {
    return false;
  }

  if (typeof array4[2] != "number") {
    return false;
  }

  if (typeof array4[3] != "number") {
    return false;
  }

  return true;
}

console.log(tipoArray("number", array4));
console.log(tipoArray("number", [1, "hola", "david", 4]));
console.log(tipoArray("number", [1, 2, 3, 4]));

/*Crear una función que recibe un array con números enteros y devuelve uno que contenga la suma acumulada de todos sus números.
 Usar la función tipoArray para validar 
que el array es de números, en caso que no, salir de la función antes de acumular con el mensaje "Error: array corrupto"*/

function sumaArray(ar) {
  console.log("Lo q le llega a sumaArray", ar);
  if (tipoArray("number", ar) === false) {
    console.log(tipoArray("number", ar));
    return "Error: array corrupto";
  }

  let sumatoria = [];
  sumatoria[0] = ar[0];
  sumatoria[1] = sumatoria[0] + ar[1];
  sumatoria[2] = sumatoria[1] + ar[2];
  sumatoria[3] = sumatoria[2] + ar[3];

  return sumatoria;
}

/*Así como el ejercicio 4 usa dos funciones aquí creadas, crear un ejercicio que utilice las 4 funciones aquí creadas.
 Ej función que recibe array, acumula sólo aquellos elementos 
pares y los invierte solo si son números enteros. Otro ejemplo puede ser el uso de letras y palabras para combinarlas 
en frase irracionales.*/

/*// Funcion que reciba un array de 4 elementos
// Si en el array son numeros tipoArray(), hago la sumatoria acumulada sumaArray(), y muestro
// solo los elementos que den resultados pares, pares() y console.log()
// En caso de no ser todos numeros, revierto el orden invertir() y lo muestro console.log()*/

let arrayFinal = [18, 19, 20, 21];

function fIntegradora(arrayFinal) {
  let arrayA = [];
  if (tipoArray("number", arrayFinal)) {
    arrayA = sumaArray(arrayFinal);
    return nPares(arrayA);
  } else {
    return arrayinvertido(arrayFinal);
  }
}

console.log(fIntegradora(arrayFinal));
