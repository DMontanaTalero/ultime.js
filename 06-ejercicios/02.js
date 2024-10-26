function createUsuario(name) {
  return {
    name,
    id: Math.random(),
  };
}

let user = createUsuario("Felipe");
let user1 = createUsuario("Chanchito");
console.log(user, user1);
