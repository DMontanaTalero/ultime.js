const usuarios = [
  { id: 1, name: "Chanchito" },
  { id: 2, name: "Feliz" },
];

const resultado = usuarios.find((usuario) => 
    usuario.name === "Feliz");
const resultado2 = usuarios.findIndex((usuario) => 
    usuario.name === "Feliz");

console.log(resultado);
console.log(resultado2);
