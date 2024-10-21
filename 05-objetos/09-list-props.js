const punto = {
  x: 10,
  y: 15,
  dibujar() {
    console.log("dibujando");
  },
};

punto.dibujar();

//delete punto.dibujar;

//punto.dibujar();

//preguntamos si existe un metodo llamado xxxxx en el objeto yyyyy
if ("dibujar" in punto) {
  punto.dibujar();
}

//Listar los valores del objeto forma antigua 
// console.log(Object.keys(punto));
// for (let llave of Object.keys(punto)) {
//   console.log(llave, punto[llave]);
// }

//Listar los valores del objeto forma nueva
for (let llave in punto) {
  console.log(llave, punto[llave]);
}

//Acceder a las propiedades del objeto cuando no conocemos sus propiedades por medio de un [Array]
for (let entry of Object.entries(punto)) {
  console.log(entry);
}
