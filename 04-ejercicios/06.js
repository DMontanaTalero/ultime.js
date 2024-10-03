let array = [2, 5, 7, 15, -5, -100, 55, 45, -5];

function cuantosPositivos(arr) {
  let res = 0;
  for (numero of arr) {
    //numero > 0 ? res++ : res;
    if (numero > 0) {
      res++;
    }
  }

  return res;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
