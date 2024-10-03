let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let menor = 0;
  let mayor = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > mayor) {
  //       mayor = arr[i];
  //     }

  //     if (arr[i] < menor) {
  //       menor = arr[i];
  //     }
  //   }

  //   arrRes = [mayor, menor];
  //   return arrRes;
  //console.log("Numero mayor: ", mayor, " Numero menor: ", menor);

  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  arrRes = [mayor, menor];
  return arrRes;
}

let numeros = getMenorMayor(array);
console.log(numeros);
