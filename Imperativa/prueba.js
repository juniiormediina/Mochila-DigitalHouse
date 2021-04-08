function agregarHttp(url) {
  return (newUrl = "http://" + url);
}

function procesar(array, callback) {
  let result = newarr.push();
  for (let i = 0; i <= array.length; i++) {
    let newarr = callback(array[i]);

    return newarr;
  }
  console.log(result);
  return result;
}

let urlCompletas = procesar(["www.google.com", "www.yahoo.com"], agregarHttp);
console.log(urlCompletas);
