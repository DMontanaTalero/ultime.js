const miArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];

function dividePortipo(arr) {
  return {
    numero: arr.filter((n) => typeof n === "number"),
    strings: arr.filter((n) => typeof n === "string"),
    objetos: arr.filter((n) => typeof n === "object"),
  };
}
const nuevoArray = dividePortipo(miArray);
console.log(nuevoArray);
