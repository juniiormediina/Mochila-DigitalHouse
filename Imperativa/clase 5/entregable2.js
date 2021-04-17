//Crear un funcion que 

//1 reciba un valor y nos retorne si ese valor es par o impar. 

function f1(n) {
    return n % 2 === 0 ? "par" : "impar";

}


console.log(f1(10));//par
console.log(f1(8));//par 
console.log(f1(5));//impar
console.log(f1(12));//par
console.log(f1(31));//impar
console.log(f1(27));//impar
console.log(f1(3));//impar


//levante una barrera si el vehículo pagó el peaje.

function peaje(pago) {
    return pago ? 'levantar la barrera' : 'no levantar la barrera'
}

console.log(peaje(true));
console.log(peaje(false));

//reciba un número y retorne si es el mismo que eligió al azar la función Math.random() entre 0 y 10.

function f3(n) {
    return n === Math.floor(Math.random() * 11) ? 'es el mismo' : 'no es el mismo'
}

console.log(f3(5));
console.log(f3(6));
console.log(f3(7));
console.log(f3(8));
console.log(f3(9));
console.log(f3(2));

//al recibir una fecha indique si la misma es navidad o no.
function navidad(fecha) {
    return fecha == '25/12/2021' ? 'Es navidad' : 'No es navidad'
}

console.log(navidad('24/01/2021'));
console.log(navidad('12/02/2021'));
console.log(navidad('25/12/2021'));
console.log(navidad('12/01/2021'));
console.log(navidad('18/01/2021'));
console.log(navidad('27/03/2021'));

//al recibir un mes, con un switch, nos indique cuántos días tiene ese mes.

function meses(mes) {
    switch (mes) {
        case 'enero':
            return 31;

            break;
        case 'febrero':
            return 28;
            break;
        case 'marzo':
            return 31;
            break;
        case 'abril':
            return 30;
            break;
        case 'mayo':
            return 31;
            break;
        case 'junio':
            return 30;
            break;
        case 'julio':
            return 30;
            break;
        case 'agosto':
            return 31;
            break;
        case 'septiembre':
            return 30;
            break;
        case 'octubre':
            return 31;
            break;
        case 'noviembre':
            return 30;
            break;
        case 'diciembre':
            return 31;




        default:
            break;
    }
}



console.log(meses('enero'));
console.log(meses('febrero'));
console.log(meses('marzo'));
console.log(meses('abril'));
console.log(meses('mayo'));
console.log(meses('junio'));
console.log(meses('julio'));
console.log(meses('agosto'));

/* reciba un valor por parámetro e indique que el alumno recursa si tiene una nota menor a 4,
 va a recuperatorio si tiene una nota menor a 7 y aprueba en el caso de que la nota sea igual o superior a 7. */

function condicionAlumno(nota) {
    if (nota < 4) {
        return 'Recursa'
    }
    if (nota < 7) {
        return 'Va a recuperatorio'
    }
    if (nota >= 7) {
        return 'Aprobado'



    }

}

console.log(condicionAlumno(10));//Aprobado
console.log(condicionAlumno(5));//Va a recuperatorio
console.log(condicionAlumno(2));//Recursa
console.log(condicionAlumno(7));//Aprobado
console.log(condicionAlumno(8));//Aprobado
console.log(condicionAlumno(3));//Recursa
console.log(condicionAlumno(2));//Recursa

/* //que retorne si una nave espacial que está entrando 
a la atmósfera ya puede abrir su paracaídas. La altura debe ser entre 2000 m. y 3000 m., y la velocidad debe ser menor a 1000 km/h. */

function naveEspacial(altura, velocidad) {
    if (((altura > 2000) && (altura < 3000)) && ((velocidad < 1000))) {
        return 'Puede abrir el paracaidas'
    }

    else {
        return 'No puede abrir el paracaidas'
    }
}
console.log(naveEspacial(1500, 800));  //No puede abrir el paracaidas
console.log(naveEspacial(3000, 1200)); //No puede abrir el paracaidas
console.log(naveEspacial(2200, 600)); //Puede abrir el paracaidas
console.log(naveEspacial(2300, 999)); //Puede abrir el paracaidas
console.log(naveEspacial(1200, 630)); //No puede abrir el paracaidas

/* recibe 3 parámetros booleanos que indican ingredientes de 
un sandwich y determina su valor final. El valor base es de $150, con tomate $20+, con papas $50+, con huevo $60+. */

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


// Tomando esto de ejemplo, crear una función que reciba por parámetro un mes 
//y devuelva a qué estación climática pertenece (verano, invierno, otoño o primavera).

function estaciones(mes) {
    switch (mes) {
        case 'enero':
        case 'febrero':
        case 'marzo':
            return 'verano'

            break;

        case 'abril':
        case 'mayo':
        case 'junio':
            return 'otoño'
            break;
        case 'julio':
        case 'agosto':
        case 'septiembre':
            return 'invierno'

            break;

        case 'octubre':
        case 'noviembre':
        case 'diciembre':
            return 'primavera'

            break;

        default:
            break;
    }
}

console.log(estaciones('enero'));// verano
console.log(estaciones('febrero'));// verano
console.log(estaciones('marzo'));// verano
console.log(estaciones('abril'));// otoño
console.log(estaciones('mayo'));//otoño
console.log(estaciones('junio'));//otoño
console.log(estaciones('julio'));// invierno