let usuarios = [
  { id: 1, activo: false },
  { id: 2, activo: false },
  { id: 3, activo: false },
];

//prueba si todos los elementos del arreglo pasan la prueba implementada por la función proporcionada
//En caso de que alguno de false devuelve false
// let todosActivos = usuarios.every((u) => {
//   console.log("todos activos", u.id, u.activo);
//   return u.activo;
// });

// console.log(todosActivos)

//prueba si alguno de los elementos del arreglo pasan la prueba implementada por la función proporcionada
let algunoActivo = usuarios.some((u) => {
  console.log(u.id, u.activo);
  return u.activo;
});

console.log(algunoActivo)
