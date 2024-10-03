
//Funciones por construcción nombre de la función la primera en mayuscula
// { id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    //Metodos del objeto no funciones
    this.recuperarClave = () => {
        console.log("Recuperando clave...");
    };
}

let usuario = new Usuario();

console.log(usuario);

class Player {
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }
    saltar(){};
    correr(){};
    saludar(){
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    };
}

let player1 = new Player('MARIO', 'ROJO')
let player2 = new Player('LUIGI', 'VERDE')

console.log(player1.saludar());
console.log(player2.saludar());