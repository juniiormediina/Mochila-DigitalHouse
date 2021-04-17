//función que recibe un numero y retorna si es par o impar

function esPar(n) {
    return (n % 2) === 0;
}

console.log(esPar(6));

//manera más díficil

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(esPar(45));// false
console.log(esPar(2)); //true
console.log(esPar(12)); //true
console.log(esPar(3)); //false

console.log("_______________________________");

function puedeEntrar(edad) {
    return edad >= 18;
}

console.log(puedeEntrar(45));
console.log(puedeEntrar(2));
console.log(puedeEntrar(12));
console.log(puedeEntrar(0));
console.log(puedeEntrar(3));
console.log("_______________________________");

/*Declarar una función llamada gastoEnCombustible(...){}
que reciba como parametros
 “vehiculo”, “kms_recorridos”, “litros_consumidos”.
A continuación, defina y realice los cálculos para obtener el total a pagar,
 teniendo en cuenta las siguientes consideraciones.
Si el vehículo es “coche”, el precio kilómetro ha de ser 0.10,
 si es “moto” ha de ser 0.20.
 si es “autobús” 0.5.
 */

/* function gastoEnCombustible(vehiculo, km_recorridos, litros_consumidos) {
    let precio_km =;
    switch (precio_km) {
        case "moto";
            precio_km === 0.20
            break;
        case "carro";
            0.5
            break;
        default;
            break;

    }
} */


//un función que recibe cant de lados y devuelve que figura geo le pertenece

figGeo(3)// triángulo
figGeo(4)// cuadrilatero

function figGeo(cantidad_lados) {
    switch (cantidad_lados) {
        case 3:
            console.log("triangulo")
            break;
            case 4:
                console.log("cuadrilatero")
                break;
            default:
                console.log("otra figura");
            break;
    }
        
     }


     figura (4)

     /* una función que recibe ingredientes de un sandwich y determina su valor final
base: $150, con tomate $20+, con papas $50+, con huevo $60+
ej function precio(tomate, papa, huevo){}
precio(true, false, true) 150 + 20 + 60
*/

//su código aquí

function precio(tomate, papa, huevo) {
    let precio = 150
    if (tomate) {precio += 20};
    if (papa) {precio += 50};
    if (huevo) {precio += 60};

        return precio
    
}

console.log(precio(true, true, true)); //150+20+50+60= 280
console.log(precio(false, true, true)); //150+50+60= 260
console.log(precio(false, false, true)); //150+60= 210
console.log(precio(false, false, false)); //150
console.log(precio(true, true, false)); //150+20+50=220
console.log(precio(true, false, false)); //150+20=170
console.log(precio(true, false, true)); //150+20+60=230


//con ternario

function precio(tomate, papas, huevo) {
    let base = 150
    base += tomate ? 20 : 0
    base += papas ? 50 : 0
    base += huevo ? 60 : 0

    return base;


}

console.log(precio(true, true, true)); //150+20+50+60= 280
console.log(precio(false, true, true)); //150+50+60= 260
console.log(precio(false, false, true)); //150+60= 210
console.log(precio(false, false, false)); //150
console.log(precio(true, true, false)); //150+20+50=220
console.log(precio(true, false, false)); //150+20=170
console.log(precio(true, false, true)); //150+20+60=230