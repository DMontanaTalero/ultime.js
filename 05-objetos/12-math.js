console.log(Math.PI); // Resultado 3.1415    Devuelve numero de PI
console.log(Math.abs(-15)); //Resultado 15  Devuelve el valor absoluto 
console.log(Math.round(15.5)); //Resultado 16 Devuelve el valor aproximado hacia el entero más cercano
console.log(Math.round(15.4)); //Resultado 15 Devuelve el valor aproximado hacia el entero más cercano
console.log(Math.floor(15.9)); //Resultado 15 Devuelve el valor aproximado hacia el entero de abajo
console.log(Math.ceil(15.1)); //Resultado 16 Devuelve el valor aproximado hacia el entero de arriba
console.log(Math.pow(2, 3)); //Resultado 8 Devuelve la potencia 
console.log(Math.sqrt(9)); //Resultado 8 Devuelve la raiz cuadrada
console.log(Math.random()); //Resultado aleatorio

function getRandom(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(getRandom(15, 1));
