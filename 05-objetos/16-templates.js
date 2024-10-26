const saludo = 'Hola \\mundo!\nbienvenidos a\t "ultimate javascript :)"';

const nombre = "Daniel";
const apellido = "Montaña";
const nombreCompleto = nombre + " " + apellido;
function plantilla(nombre) {
  return `Hola mundo!

Bienvenidos a "Ultimate JavaScript" :)

Cariños ${nombre}.
`;
}

console.log(plantilla("Chanchito feliz"));
