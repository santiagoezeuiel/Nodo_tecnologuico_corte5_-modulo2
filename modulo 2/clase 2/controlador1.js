/*
Ejercicio N° 4: Introducción y concepto básico.
Realizar un programa que permita ingresar el importe total de una compra que realize el cliente y sobre
el mismo aplicar un descuento del 15%.
Mostrar por consola el importe total de la compra y el descuento del 15%
como así tambíen el importe restante fianl.
*/

/*Bloque de codigo*/

{

    console.log(`Hola clase N° 2`);

    /* paso1- Tengo que tener una variablew donde el usuario de la aplicación
    pueda ingresar el importe de compra*/
    let importeCompra = 0;


    /* paso2 - pedirle al usuario que ingrese un valor y lo guaarde en una variable*/
    importeCompra = Number(prompt(`Ingrese el valor de la compra`));

    /* paso3- Mostrar ese valor por la consla*/
    console.log(importeCompra);

    /* paso4- voy a declarar una variable donde voy a calcular momentaniamente el descuanto del 15%*/
    let descuento = 0;

    /* paso 5- Haser el calculo del descuento */
    descuento = (importeCompra * 15) / 100;

    /* paso 6- mostrar el descuento */
    console.log(`El descuento es de: $${descuento}`);

    /* paso7 - calcular el importe a pagar */

    let importeAPagar = 0; // declaro e inicializo la variable

    importeAPagar = importeCompra - descuento;

    /* pso8 - mostrar el importe a pagar */
    console.log(`El importe de la compra es ${importeCompra} el descuento es de ${descuento} el total a pagar es de: $${importeAPagar}  `);

     
}