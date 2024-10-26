let objeto = {
  id: 1,
  name: "Chanchito",
  login: () => {},
  logout: () => {},
};

// function cualesMetodos(obj) {
//     let metodo = [];
//     for(let i in obj){
//         if (typeof obj[i] === "function") {
//             metodo[i] = obj[i];
//         }

//     }
//   return metodo;
// }

function cualesMetodos(obj) {
  for (let i in obj) {
    if (typeof obj[i] === "function") {
      console.log(i);
    }
  }
}

cualesMetodos(objeto);
