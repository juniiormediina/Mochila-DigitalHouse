/* function agregarHttp(url) {
  return (newUrl = "http://" + url);
}

function procesar(array, callback) {
  let result = [];
  for (let i = 0; i <= array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

let urlCompletas = procesar(["www.google.com", "www.yahoo.com"], agregarHttp);
console.log(urlCompletas); */

function tengoClases(dia) {
  switch (dia) {
    case "lunes":
      console.log("tenés clases");
      break;
    case "miercoles":
      console.log("tenés clases");
      break;
    case "viernes":
      console.log("tenés clases");
      break;
    default:
      console.log("no tenés clases");
      break;
  }
}

tengoClases("lunes");
tengoClases("miercoles");
tengoClases("viernes");
tengoClases("jueves");
