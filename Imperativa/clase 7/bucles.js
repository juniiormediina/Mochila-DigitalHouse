const puntajes = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for (let index = 0; index < puntajes.length; index++) {
 console.log(puntajes[index]);
}

// Los arrays tienen la particularidad de que si yo pongo
//elnombredelarray.lenght ahi adentro tengo la longitud del array guardada.

//console.log(puntajes.length);

//Por lo tanto cuando lo quiero aplicar a un for, para decirle
//que recorra nuestro array tengo que declarar la variable en 0, pq 
//el array va a arrancar en 0 y dsp comparar la variable que declare
//con la el lenght diciendole que compare hasta que la posicion este completada
// de 0, asi me lo toma
// pq el array arranca desde 0, finalmente incremento en uno

//EJERCICIO PLAYGROUND 2 

const preciosSinIva = [1200, 340, 560, 30400, 500, 80, 1000, 90000];
const iva = 1.21;

for (let i = 0; i < preciosSinIva.length; i++) {
 console.log(preciosSinIva[i] * iva);
}


//EJERCICIO 3 

const preciosSinIva = [1200, 340, 560, 30400, 500, 7060, 400, 1000];
const iva = 1.21;
let preciosConIva = [];

function guardarPreciosConIva(preciosSinIva) {
  for (let i = 0; i < preciosSinIva.length; i++) {
    preciosConIva.push(preciosSinIva[i] * iva);
  }
}

//En este caso la variable preciosConIva esta declarada afuera, es decir, con un scope
//global, por lo cual, dsp se podria modificar. Por eso no es una buena practica


function mostrarPreciosConIva(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}


// Separamos en dos funciones para que una obtenga los resultados y dsp en la otra
// que muestre por pantalla los mismos.

guardarPreciosConIva(preciosSinIva);
mostrarPreciosConIva(preciosConIva);

//SEGUIMOS AVANZANDO

const preciosSinIva = [1200, 340, 560, 30400, 500, 7060, 400, 1000];
const iva = 1.21;

function guardarPreciosConIva(preciosSinIva) {
  let preciosConIva = [];
  for (let i = 0; i < preciosSinIva.length; i++) {
    preciosConIva.push(preciosSinIva[i] * iva);
  }
  return preciosConIva;
}

function mostrarPreciosConIva(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const preciosConIva = guardarPreciosConIva(preciosSinIva);
mostrarPreciosConIva(preciosConIva);


//La idea es crear varias funciones y que cada una se especifique en 
//algo en especial. Para que pueda ser mas moldeable y modificable luego, es decir
//que el codigo sea reutilizable/

