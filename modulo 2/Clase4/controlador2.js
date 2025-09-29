
/* 
Conntrolador apra saver si es apr o impar
*/

/*
Realizar  un programa que permita introducir un valor 
(x) y determinar si el mismo es par o impar
*/


{

    let numeroIngresado = 0;

    numeroIngresado = Number(prompt(`Ingrese un numero a lazar`))

    console.log(numeroIngresado)

    // Aqui se calcula el resultado de la divicion
    let resultadoDivicion = numeroIngresado / 2;

    // Aqui se calcula el ressto de la dicicion
    let restoDeDivicion = numeroIngresado % 2

    console.log(`El resultado de la divicion es $${resultadoDivicion}`)
    console.log(`El resultado del resto de una divicion $${restoDeDivicion}`)


    /* Por regra general si el resto de la divicion de un numero es 2 me da 
    resto es igual = 0 : par
    resto es igual = 1 impar
    */

    let parOImpar = restoDeDivicion === 0 ? `PAR` : `IMPAR`;

    console.log(parOImpar)

}