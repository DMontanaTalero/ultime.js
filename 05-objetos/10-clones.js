let punto = {
  x: 10,
  y: 15,
};

//Asignar las propiedades que se encuentran a la derecha en objetos de la izquierda Object.assign(izquierdo, derecha);
// Object.assign(punto, { z: 20 });
let clonePunto1 = Object.assign({}, punto, { z: 20 });
let clonePunto2 = Object.assign({}, punto, { z: 20, x: 1 });
let clonePunto3 = Object.assign({ a: 0 }, punto, { z: 20, x: 1 });
//console.log(punto, clonePunto1, clonePunto2, clonePunto3);

let copiaPunto = Object.assign({}, punto);
//console.log(copiaPunto, punto);

let copia3 = { ...punto };
//console.log(punto, copia3)

let copia4 = {};
for(let llave in punto){
    copia4[llave] = punto[llave];
}
console.log(punto, copia4)
