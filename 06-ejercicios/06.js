let obj1 = {
  id: 1,
  name: "Chanchito",
};

function crearCopia(obj) {
    let nuevoObjeto = {};
    for(let i in obj){
        nuevoObjeto[i] = obj[i];
    }
    return nuevoObjeto;
}

let obj2 = crearCopia(obj1);
console.log({ obj1, obj2 });
