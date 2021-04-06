/* una función que recibe ingredientes de un sandwich y determina su valor final
base: $150, con tomate $20+, con papas $50+, con huevo $60+
ej function precio(tomate, papa, huevo){}
precio(true, false, true) 150 + 20 + 60
*/

//su código aquí

const precio = function (sandwich, tomate, papa, huevo) {
  let precioBase = 150;
  if (sandwich) {
    precioBase += tomate ? 20 : 0;
    precioBase += papa ? 50 : 0;
    precioBase += huevo ? 60 : 0;
    return precioBase;
  } else {
    console.log("No ha elegido su sandwich ni sus ingredientes");
  }
};

console.log(precio(true, true, true, true)); //150+20+50+60= 280
console.log(precio(true, false, true, true)); //150+50+60= 260
console.log(precio(true, false, false, true)); //150+60= 210
console.log(precio(true, false, false, false)); //150
console.log(precio(true, true, true, false)); //150+20+50=220
console.log(precio(true, true, false, false)); //150+20=170
console.log(precio(true, true, false, true)); //150+20+60=230
