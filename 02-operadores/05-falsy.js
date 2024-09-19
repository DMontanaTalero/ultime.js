// short-circuit

//Falso
//false
//0
//''
//null
//undefined
//NaN

let nombre = 'chanchito feliz';
let username = nombre || 'anonimo';
console.log(username);

function fn1() {
    console.log('soy funcion 1')
    return false;
}

function fn2() {
    console.log('soy funcion 2')
    return true;
}

let = fn1() && fn2();