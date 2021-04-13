/* Ejercicio 1 */
console.log("--------- Ejercicio 1 ---------");
console.log("¿Es par?");

function par(x) {
  let aux = x % 2 == 0 ? true : false;
  return aux;
}
console.log(par(2));
console.log(par(3));

/* Ejercicio 2 */
console.log("--------- Ejercicio 2 ---------");

function vehiculo(pase) {
  return pase == true ? "levantando barrera" : "pague su pase para poder pasar";
}
console.log(vehiculo(true));
console.log(vehiculo(false));

/* Ejercicio 3 */
console.log("--------- Ejercicio 3 ---------");

function azar(x) {
  var azar = Math.random() * (10 - 0);
  return x == azar ? true : false;
}
console.log(azar(1));
console.log(azar(2));
console.log(azar(3));
console.log(azar(4));
console.log(azar(5));
console.log(azar(6));
console.log(azar(7));
console.log(azar(8));
console.log(azar(9));
console.log(azar(10));

/* Ejercicio 4 */
console.log("--------- Ejercicio 4 ---------");

function navidad(fecha) {
  return fecha === "12/24" ? "es Navidad" : "no es Navidad";
}
console.log(navidad("12/24"));
console.log(navidad("12/25"));

/* Ejercicio 5 */
console.log("--------- Ejercicio 5 ---------");

function mes(mes) {
  switch (mes) {
    case "enero":
      console.log(31);
      break;
    case "febrero":
      console.log(28);
      break;
    case "marzo":
      console.log(31);
      break;
    case "abril":
      console.log(31);
      break;
    case "mayo":
      console.log(30);
      break;
    case "junio":
      console.log(31);
      break;
    case "julio":
      console.log(31);
      break;
    case "agosto":
      console.log(31);
      break;
    case "septiembre":
      console.log(30);
      break;
    case "octubre":
      console.log(30);
      break;
    case "noviembre":
      console.log(31);
      break;
    case "diciembre":
      console.log(30);
      break;
    default:
      break;
  }
}
mes("enero");
mes("febrero");
mes("marzo");
mes("abril");
mes("mayo");
mes("junio");
mes("julio");
mes("agosto");
mes("septiembre");
mes("octubre");
mes("noviembre");
mes("diciembre");

/* Ejercicio 6 */
console.log("--------- Ejercicio 6 ---------");

function nota(x) {
  if (x <= 4) {
    return "Recursa";
  } else if (x > 4 && x < 7) {
    return "Recuperatorio";
  } else {
    return "Aprueba";
  }
}
console.log(nota(4));
console.log(nota(6));
console.log(nota(9));

/* Ejercicio 7 */
console.log("--------- Ejercicio 7 ---------");

function nave(altura, velocidad) {
  if (altura <= 3000 && velocidad <= 1000) {
    return "Lanzando paracaídas";
  } else {
    return "Desacelera o desciende más";
  }
}
console.log(nave(2999, 999));
console.log(nave(5000, 0));
console.log(nave(0, 5000));
console.log(nave(11000, 3000));

/* Ejercicio 8 */
console.log("--------- Ejercicio 8 ---------");

function precio(tomate, papas, huevo) {
  let precio = 150;
  if (tomate) {
    precio += 20;
  }
  if (papas) {
    precio += 50;
  }
  if (huevo) {
    precio += 60;
  }
  return precio;
}
console.log(precio(true, false, true));
console.log(precio(false, false, true));
console.log(precio(true, false, false));
console.log(precio(true, true, true));
console.log(precio(true, true, true));

/* Ejercicio 9 */
console.log("--------- Ejercicio 9 ---------");

function mes(mes) {
  switch (mes) {
    case "enero":
      console.log(31);
      break;
    case "febrero":
      console.log("Invierno");
      break;
    case "marzo":
      console.log("Otoño");
      break;
    case "abril":
      console.log("Primavera");
      break;
    case "mayo":
      console.log("Primavera");
      break;
    case "junio":
      console.log("Invierno");
      break;
    case "julio":
      console.log("Verano");
      break;
    case "agosto":
      console.log("Verano");
      break;
    case "septiembre":
      console.log("Otoño");
      break;
    case "octubre":
      console.log("Verano");
      break;
    case "noviembre":
      console.log("Otoño");
      break;
    case "diciembre":
      console.log("Otoño");
      break;
    default:
      break;
  }
}
mes("enero");
mes("febrero");
mes("marzo");
mes("abril");
mes("mayo");
mes("junio");
mes("julio");
mes("agosto");
mes("septiembre");
mes("octubre");
mes("noviembre");
mes("diciembre");
