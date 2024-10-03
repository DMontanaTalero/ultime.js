function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando...');
    }
}

let punto = { z: 7 }

/**
 * Lllamado para agregar y extender objetos, punto recibe los this de la funcion
 * se crea el nuevo objeto con la propiedad z:7 y se le agregan los this de la funcion
 */
Punto.call(punto, 1, 2);

console.log(punto);

let punto2 = { d: 8 }
//Funciona igual que el metodo call pero se colocan los argumentos en [corchetes]
Punto.apply(punto2, [1, 2]);
console.log(punto2);


// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() {
//         console.log('Dibujando...');
//     }
//     `);

//     const p = new Point(1,2);
//     console.log(p);