/*
Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR
*/

{

    let numero = 0;

    numero = Number(prompt(`Ingres un número: `))

    console.log(` El numero ingresado es: ${numero}`)

    if (numero % 2 == 0)
    {
        console.log(`El numero ingresado es par`)
    }
    else
    {
        console.log(`El numero ingresado es impar`)
    }
}