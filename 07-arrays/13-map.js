const usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];

//const lista = usuarios.map((user) => user.nombre);
// const lista = usuarios.map((user) => {
//     return `<li>${user.nombre}</li>`;
// });
// const html = `<ol>${lista.join('')}</ol>`
// console.log(lista);
// console.log(html)

// const mapped = usuarios.map((user) => {
//     if (user.edad > 17) {
//         user.mayor = true;
//     } else{
//         user.mayor = false;
//     }
//     return user;
// })

// const mapped = usuarios.map((user) => {
//   return {
//     ...user,
//     mayor: user.edad > 17,
//   };
// });

// console.log(mapped);

const lista = usuarios
  .filter((u) => u.edad > 17)
  .map((u) => `<li>${u.nombre}</li>`);
const html = `<ol>${lista.join("")}</ol>`;
console.log(lista);
console.log(html);
