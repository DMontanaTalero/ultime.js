let i = 0;

while (i < 600) {
    i++;
    if (i === 2) {
        continue;
    }
    if (i === 16) {
        break;  
    }
    console.log(i);
}

//Se puede usar para todos los controladores de flujo (for, for in, for of, while, do while)