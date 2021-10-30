var numero = parseInt(prompt("Ingresa un numero entre 1 y 20"));

while (isNaN(numero) || numero < 1 || numero > 20){
    var numero = parseInt(prompt("Número fuera del rango, debe ser entre 1 y 20"));
};

for (i = 1 ; i <= numero; i++) {
    let multiplicar = (contador,numeroUser) => {
        return contador * numeroUser;
    }
    console.log(multiplicar(i,numero))
}

for (let i = 1; i <= numero; i++) {
    let res = 1;
    for (let j= 1; j <= i; j++) {
        res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
}


