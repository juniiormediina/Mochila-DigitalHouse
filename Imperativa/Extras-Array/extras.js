/* 
Usando sólo .pop() y .push(), crear una función que reciba un array de 4 elementos por parámetro y retorne un array con los elementos invertidos en su orden: Ej [1,2,3,4] retorna [4,3,2,1]
*/

console.log("------ Ejercicio 1 ------");

const inverse = (array) => {
  let arrayReverse = array.reverse();
  return arrayReverse;
};

console.log(inverse([1, 2, 3, 4]));

/* 
Crear una función que recibe un array de 4 elementos con números enteros y devuelve uno que contenga sólo los números pares, si los hubiera. Ej [1,2,3,4] retorna [2,4]
*/

console.log("------ Ejercicio 2 ------");

const enteros = (array) => {
  let arrayEnteros = [];

  array[0] % 2 == 0 ? arrayEnteros.push(array[0]) : null;
  array[1] % 2 == 0 ? arrayEnteros.push(array[1]) : null;
  array[2] % 2 == 0 ? arrayEnteros.push(array[2]) : null;
  array[3] % 2 == 0 ? arrayEnteros.push(array[3]) : null;

  return arrayEnteros;
};

console.log(enteros([1, 2, 3, 4]));

/* 
Crear una función que recibe 2 parámetros, un texto con un tipo de dato de JS y  un array de 4 elementos; retorna un booleano que indica si todos los elementos son del tipo de dato que se envió por parámetro. Ej: tipoArray(“number”, [1,2,3,4]) retorna true; 
tipoArray(“number”, [1,2,”hola”,,4]) retorna false.
*/

console.log("------ Ejercicio 3 ------");

const type = (word, array) => {
  if (typeof array[0] == word) {
    if (typeof array[1] == word) {
      if (typeof array[2] == word) {
        if (typeof array[3] == word) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(type("number", [1, 2, 3, 4]));
console.log(type("number", [1, 2, "hola", 4]));

/* 
Crear una función que recibe un array con números enteros y devuelve uno que contenga la suma acumulada de todos sus números. Usar la función tipoArray para validar que el array es de números, en caso que no, salir de la función antes de acumular con el mensaje "Error: array corrupto"
*/

console.log("------ Ejercicio 4 ------");

const sumatoria = (array) => {
  let total = 0;
  if (type("number", array)) {
    total += array[0] + array[1] + array[2] + array[3];
    return total;
  } else {
    return "Error: array corrupto";
  }
};

console.log(sumatoria([1, 2, 3, 4]));
console.log(sumatoria([1, "generando un error", 3, 4]));

/* 
Así como el ejercicio 4 usa dos funciones aquí creadas, crear un ejercicio que utilice las 4 funciones aquí creadas. Ej función que recibe array, acumula sólo aquellos elementos pares y los invierte solo si son números enteros. Otro ejemplo puede ser el uso de letras y palabras para combinarlas en frase irracionales.
*/

console.log("------ Ejercicio 5 ------");

const mix = (array) => {
  let res = [];
  if (type("number", array)) {
    res = enteros(array);
    res = inverse(res);
  }
  return res;
};

console.log(mix([1, 2, 3, 4]));
console.log(mix([1, "generando un error", 3, 4]));

/* prueba */

let acc = 0;
function noParesDeContarImparesHasta(numero) {
  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
      acc++;
    }
  }
  return acc;
}

console.log(noParesDeContarImparesHasta(7));
