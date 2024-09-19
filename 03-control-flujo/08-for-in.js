let user = {
    id:1,
    name: 'Chanchito',
    age: 25,
}

for (let prop in user){
    console.log(prop,':', user[prop]);
}

let animales = ['an1', 'an2', 'an3'];

for (let indice in animales){
    console.log(indice, animales[indice]);
}