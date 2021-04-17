/* Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañade. Debe retornar un valor booleano (TRUE, FALSE) 
que indique si la persona puede subirse o no, basado en las siguientes condiciones:
Debe medir más de 1,40 m. y menos de 2 metros.
Si mide menos de 1,40 m., deberá venir acompañado.
Si mide menos de 1,20 m., no podrá subir ni acompañado.
 Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego. */

 function puedeSubir(altura, acompanade, penalizado) {
    if (penalizado) {
    return false  }
    if (altura>=1.40 && altura<2.00) {
        return true }
    if (altura>1.20 && altura<2.00 && acompanade) {
        return true
        
    }    

        
     else {
        return false
        
    }
 }
     
 

 console.log(
    puedeSubir(1.1, true, false), //false
    puedeSubir(1.1, false, false), //false
    puedeSubir(1.3, true, false), //true
    puedeSubir(1.3, false, false), //false
    puedeSubir(1.7, true, false), //true
    puedeSubir(1.7, false, false), //true
    puedeSubir(2.1, true, false), //false
    puedeSubir(2.1, false, false), //false
    puedeSubir(1.1, true, true), //false
    puedeSubir(1.1, false, true), //false
    puedeSubir(1.3, true, true), //false
    puedeSubir(1.3, false, true), //false
    puedeSubir(1.7, true, true), //false
    puedeSubir(1.7, false, true), //false
    puedeSubir(2.1, true, true), //false
    puedeSubir(2.1, false, true), //false

)