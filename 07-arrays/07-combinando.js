let arr = [1, 2];
let arr2 = [3, 4];

//combina los arrays
let combinados = arr.concat(arr2);
//console.log(combinados,arr,arr2);

//divide desde el indice indicado hasta el indice indicado
//let dividos = combinados.slice(1,3);
//let dividos = combinados.slice(1);
let dividos = combinados.slice();
console.log(dividos);
