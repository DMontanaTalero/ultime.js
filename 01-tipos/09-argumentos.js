function suma(a,b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(4,96,5);

console.log(resultado);
console.log(typeof suma);