

// EJERCICIO 1 Consigna: pasar el contenido de vaso1 a vaso2
let vaso1 = "azul";
let vaso2 = "rojo";
//SCOPE- alcance que tienen las variables, en este caso es global.
function intercambiar() {
    const aux = vaso1;
    vaso1 = vaso2;
    vaso2 = aux;   
}

console.log("vaso 1: " + vaso1) //informas por pantalla concatenando, como uno es string, los dos se van a ver como un string
console.log("vaso 2: " + vaso2);
console.log("-------------");


intercambiar();

console.log("vaso 1: " + vaso1);
console.log("vaso 2: " + vaso2);

console.log("ejercicio 1_________________________________________________________");

//EJERCICIO 2
let vaso1= "azul";
let vaso2= "rojo";

function intercambiar(v1, v2) {
    const aux = v1;
    v1 = v2;
    v2 = aux;
    return "vaso 1: " + v1 + "\nvaso 2: " + v2;
    }

    console.log("vaso 1: " + vaso1);
    console.log("vaso 2: " + vaso2);
    
    const mensaje = intercambiar(vaso1, vaso2);

    console.log = (intercambiar(vaso1, vaso2));
    console.log("-------------");
    console.log(mensaje);

