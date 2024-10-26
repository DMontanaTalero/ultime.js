const letras = ['a', 'b'];

//agregar elementos al final del array
letras.push('c', 'd'); 

//agrega elementos al comienzo del array
letras.unshift('y', 'z') 

//agrega elementos segun el indicie
//(3 es el numero del indice desde donde se agregaran los elementos al array)
//(0 son el numero de elementos que vamos a eliminar)
//se colocan los elementos que vamos a agregar
letras.splice(3,0,1,2)


console.log(letras);