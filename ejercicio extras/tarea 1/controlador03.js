/*
Realizar un programa que permita ingresar el importe total de una compra
que realiza un cliente y sobre el mismo aplicarle descuento 15%.
Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final
*/


{

    const DESCUENTO = 15;
    let compra = Number(prompt(`Ingrese el monto de la compra`));

    function importeCompra(compra)
    {
         if(!isNaN(compra))
         {
            return compra * DESCUENTO / 100;
         }
         else
         {
            return false;
         }
    }
    
    function importeTotal(compra)
    {
        if (!isNaN(compra))
        {
            return compra - importeCompra(compra);
        }
        else
        {
            return false
        }
    }
   

    console.log(`\n` + `*`.repeat(30));
    console.log(`El importe de compra: $ ${compra}`);
    console.log(`El descuento es de $ ${importeCompra(compra)}`);
    comsole.log(`importe a pagar: ${importeTotal(compra)}`);

    console.log(importeCompra(compra));
}