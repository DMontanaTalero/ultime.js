const ahora = new Date(); // fecha exacta del computador
const fecha = new Date('December 11 1965 14:15'); // fecha que yo necesito y quiero por medio de un parametro string
const fecha2 = new Date(1986, 11, 25, 14, 15); // parametros "Año, Mes (de 0 a 11 ene a dic), dia, hora, minutos, segundos, milisegundos

console.log(fecha2.toDateString());
console.log(fecha2.toISOString()); // para enviar fechas al servidor
console.log(fecha2.toTimeString());

fecha2.getDate() // para obtner el dato de la fecha
fecha2.setFullYear(1987) // para editar el dato de la fecha
console.log(fecha2)