// function similares(obj1, obj2) {
//   if (obj1.id === obj2.id) {
//     if (obj1.name === obj2.name) {
//       return true;
//     }
//   }
//   return false;
// }

function similares(obj1, obj2) {
  let distintos = false;
  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      distintos = true;
    }
  }
  return !distintos;
}

let resultado = similares({ id: 1, name: "Nico" }, { id: 1, name: "Nico" });

console.log(resultado);
