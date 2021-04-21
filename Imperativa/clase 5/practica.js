/* let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	} */
// empieza aca

/*   let dia = "lunes"
switch (dia) {
    case "viernes":
        console.log("buen finde");
        
        break;
case "lunes":
    console.log("buena semana");

    break;
    
    default:
        console.log("buen dia");
        break;
}
	 */

let dia = "miercoles";
function tengoClases(dia) {
  switch (dia) {
    case "miercoles":
    case "lunes":
    case "viernes":
      console.log("tenés clases");

      break;

    default:
      console.log("no tenés clases");
      break;
  }
}

tengoClases(dia);
tengoClases("jueves");
