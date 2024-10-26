const saludo = "Hola Mundo!";
const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length); //Numero de caracteres que tiene el string
console.log(saludo.indexOf("Mu")); //Numero de indice donde se encuentra el parametro que pasamos
console.log(saludo.indexOf("dsf"));
console.log(saludo.includes("H")); //Valida si existe o no (true or false)
console.log(saludo.replace("Mundo", "Nicolas")); //Devuelve un string que se reemplaza

console.log(saludo.toLowerCase())//Pasa el texto a minusculas
console.log(saludo.toUpperCase())//Pasa el texto a mayusculas

console.log(saludo.substring(0,4)); //devuelve el string desde la posición inicial a la final -1
console.log(saludo.substr(0,4));

const espacios = "     Hola        mundo!      ";
console.log(espacios.trim()); //elimina los espacios que estan al inicio y al final del string
console.log(espacios.trimEnd()); //elimina los espacios que estan al final del string
console.log(espacios.trimStart()); //elimina los espacios que estan al inicio del string

