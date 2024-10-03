//Indice debe ser mayor o igual a 0
//El elemeno debe existir en el array

function getbyIdx(arr, idx) {
  if (idx >= 0 && idx < arr.length) {
    return arr[idx];
  }
  return console.log("El indice no es valido");
}

let resultado = getbyIdx([1, 2], -1);
console.log(resultado);
