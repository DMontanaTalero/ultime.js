//La factory function se colocan en camelCase

function crearUsuario(name, email) {
  return {
    email,
    name,
    direccion: {
      calle: "Queen",
      numero: 15,
    },
    //Booleano
    activo: true,
    // Funcion de un objeto
    recuperarClave: function () {
      console.log("Recuperando clave...");
    },
  };
}

let user1 = crearUsuario('Daniel', 'dani@ks.com');
let user2 = crearUsuario('Felipe', 'Felipe@ks.com');