const data = [
  {
    name: "Nicolas",
    last: "Lopez",
    age: 27,
    weight: 83.5,
    height: 1.7,
    healthInsurance: "Swiss Medical",
  },
  {
    name: "Esteban",
    last: "Piazza",
    age: 28,
    weight: 80.1,
    height: 1.76,
    healthInsurance: "Osde",
  },
  {
    name: "Jose",
    last: "Fermozo",
    age: 33,
    weight: 63.7,
    height: 1.53,
    healthInsurance: "",
  },
  {
    name: "Juana",
    last: "Fernandez",
    age: 26,
    weight: 55.0,
    height: 1.62,
    healthInsurance: "Omint",
  },
];

data.map((elem) => {
  let imc = elem.weight / Math.pow(elem.height, 2);
  console.log(
    `${elem.name} tiene ${
      elem.age
    } años y su indice de masa corporal es de ${imc.toFixed(2)} ${
      elem.healthInsurance
        ? `y cuenta con el seguro ${elem.healthInsurance}`
        : `y no cuenta con ningun seguro`
    }`
  );
});
