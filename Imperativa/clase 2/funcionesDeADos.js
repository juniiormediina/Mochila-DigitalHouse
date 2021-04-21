let sumar = function f(n1, n2) {
  return n1 + n2;
};

console.log(sumar(1, 2));

let restar = function f1(n1, n2) {
  return n1 - n2;
};

console.log(restar(3, 2));

let multiplicacion = function f2(n1, n2) {
  return n1 * n2;
};
console.log(multiplicacion(5, 2));

let division = function f3(n1, n2) {
  return n1 / n2;
};
console.log(multiplicacion(10, 2));

//EJERCICIO 3

let nombreJugador = "Messi";
let golesJugador = 0;
let precioEnDolares = 0;

function hacerGol() {
  golesJugador++;
  precioEnDolares = precioEnDolares + 10000;
  console.log("Gooool!");
  console.log("Nombre del jugado: " + nombreJugador);
  console.log("Goles del jugador: " + golesJugador);
  console.log("Precio en dolares: " + precioEnDolares);
}

hacerGol();
