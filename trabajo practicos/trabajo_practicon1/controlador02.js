
 /*
 Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.
*/

{

    let importeCompra = 0;
    let descuento = 0;
    let importeTotal = 0;

    importeCompra = Number(prompt(`Ingrese el monto total de la compra:`))

    descuento = importeCompra * 15 / 100

    importeTotal = importeCompra - descuento

    console.log(`Monto total de la compra: ${importeCompra}`)
    console.log(`Total de descuento es: ${descuento}`)
    console.log(`Total a cobrar es de: ${importeTotal}`)

}