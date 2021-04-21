let films = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

//solución punto 1

console.log("el segundo elemento del array es: " + films[1]);
let otrasPelis = [];
otrasPelis[0] = films[0].toUpperCase();
otrasPelis[1] = films[1].toUpperCase();
otrasPelis[2] = films[2].toUpperCase();
otrasPelis[3] = films[3].toUpperCase();
otrasPelis[4] = films[4].toUpperCase();

console.log(films);
console.log(otrasPelis[0]);
console.log(otrasPelis[1]);
console.log(otrasPelis[2]);
console.log(otrasPelis[3]);
console.log(otrasPelis[4]);

let cartoons = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

//ejercicio 4
cartoons.pop();

//ejercicio 3
function fusionArray() {
  films.push(cartoons[0]);
  films.push(cartoons[1]);
  films.push(cartoons[2]);
  films.push(cartoons[3]);
  films.push(cartoons[4]);

  return films;
}

console.log(films);

// ejercicio 5

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

function comparacion(params) {}

console.log(comparacion(asiaScores, eurScores, 0));

// no se puede

console.log(asiaScore === euroScore);
