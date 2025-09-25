
/*
Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.
*/

{
    let montoCompra = 0;
    let Descuento = 0;
    const DESCUENTOMAXIMO = 80000

    montoCompra = Number(prompt(`Ingrese el monto de compra`))

    Descuento = montoCompra * 50 / 100

    console.log(`Monto de compra es de: $${montoCompra}`)
    //console.log(`Monto  de descuento es de: $${Descuento}`)

    if (Descuento <= DESCUENTOMAXIMO)
    {
        console.log(`El monto a pagar es de $${montoCompra - Descuento}, el descuento aplicado es de: $${Descuento}`)
    }
    else
    {
        console.log(`El monto a pagar es de $${montoCompra - DESCUENTOMAXIMO}, el descuento tope aplicado es de: ${DESCUENTOMAXIMO}`)
    }    
}