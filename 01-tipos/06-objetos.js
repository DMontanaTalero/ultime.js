// Personaje de TV
let nombre = "Tanjiro";
let anime ="Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);
console.log(personaje["edad"]);

personaje.edad = 13;

console.log(personaje["edad"]);

delete personaje.anime;