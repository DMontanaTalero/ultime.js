const user = { id: 1 };

user.name = "Daniel";
user.guardar = function () {
  console.log("Guardando ", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

//No se puede cambiar los valores (freeze)
//const user1 = Object.freeze({ id: 1 });

//Solo se puede cambiar los valores de las propiedades existentes (seal)
const user1 = Object.seal({ id: 1 });
user1.name = "Daniel";
user1.id = 2;
console.log(user1);
