let objeto = {
  id: 1,
  name: false,
  login: () => {},
  logout: () => {},
};

let propiedad = "name";

function tieneProp(obj, propiedad) {
  for (let i in obj) {
    if (i === propiedad) {
      return true;
    }
  }
  return false;
}

// function tieneProp(obj, propiedad) {
//   let props = Object.keys(obj);
//   console.log(props);

//   for (let i of props) {
//     if (propiedad == i) {
//       return true;
//     }
//   }

//   return false;
// }

console.log(tieneProp(objeto, propiedad));
