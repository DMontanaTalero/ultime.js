const usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];

//Se usa para filtrar datos de un array segun una condición
const mayores = usuarios.filter((u) => u.edad > 17);

console.log(mayores);
