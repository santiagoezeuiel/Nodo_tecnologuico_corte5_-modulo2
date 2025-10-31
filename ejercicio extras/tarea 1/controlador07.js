/*

Realizar un programa que permita ingresar dos números y que realice
trodas las comparaciones lógicas que se pueden realizar entre ellos:

número 1 > número 2
número 1 < número 2
número 1 = número 2

*/
{

let numero1 = 0;
let numero2 = 0;

function comparacion(numero1, numero2)
{

    numero1 = Number(prompt(`Ingrese un el primer numero`));

    numero2 = Number(prompt(`Ingrese el segundo número`));


    if (isNaN(numero1))
    {
        return console.log(`ERROR: El primer parametro no es númerico`);
    }
    else if (isNaN(numero2))
    {
        return console.log(`ERROR: El segundo perametro eno es númerico`)
    }

    if (numero1 > numero2)
    {
        return console.log(`El numero ${numero1} es mayor al numero ${numero2}`);
    }
    else if (numero1 < numero2)
    {
        return console.log(`El numero ${numero1} en menor al numero ${numero2}`);
    }
    else if (numero1 == numero2)
    {
        return (console.log(`El numero ${numero1} es igula al numero ${numero2}`));
    }
    else
    {
        return (console.log(`ERROR`));
    }

}

console.log(`\n` + `=`.repeat(30));
console.log(`Comparacion de dos nuemros`);
console.log(`=`.repeat(30));
console.log(`\n`)
console.log(`Resultados de las comparaciones:`);
console.log(`${comparacion(numero1, numero2)}`);

}