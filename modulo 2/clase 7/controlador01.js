/* Repaso de Est. Condicionales */

{

    /* Primer Condicionales (if/else) 
    
        Esta apuntado hacia realizar
        comparaciones de variables continuas.
        asumen valores infinitos dentro de un rango.
        

        0 - 5 kilogramos = A
        5 - 10 kilogramos = B

        
    */

    let pesoEnKilosAcero = 0;
    pesoEnKilosAcero = Number(prompt(`Ingrese el Peso`));

    if((pesoEnKilosAcero >= 0) && (pesoEnKilosAcero <= 5))
    {
        console.log(`Este material corresponde a la categoria A`);
    }
    else
    {
        if((pesoEnKilosAcero >=5) && (pesoEnKilosAcero <= 10))
        {
            console.log(`Este material corresponde a la categoria B`);
        }
    }

    /* switch => cual ó que ?. 
        => siempre habla de un conjunto de valores
        finitos y claramente diferenciados  
    */

    /*  Variables Discretas => asumen un conjunto finito de opciones
        1 - Efectivo => 0% interes
        2 - Transferencia => 1% interes
        3 - QR => 0% interes
        4 - Tarjetas BNA => 5% interes
        5 - Naranja => 3% interes
    */

    let opcionPago = 0;
    opcionPago = Number(prompt(`Ing. Forma de Pago`));

    let interesFinanciero = 0;


    switch(opcionPago)
    {
        case 1:
            {
                interesFinanciero = 0;
                console.log(`Efectivo`);
                break;
            }
        case 2:
            {
                interesFinanciero = 1;
                console.log(`Transferencia`);
                break;
            }

        case 3:
            {
                interesFinanciero = 0;
                console.log(`QR`)
                break;
            }

        case 4:
            {
                interesFinanciero = 5;
                console.log(`Tarjeta BNA`);
                break;
            }

        case 5:
            {
                interesFinanciero = 3;
                console.log(`Tarjeta Naranja`);
                break;
            }

        default:
            {
                interesFinanciero = 0;
                console.log(`Ud. Ingreso una opción no valida`);
                break;
            }

    }

    let importeAguaEnero = 2500000;

    let importeAguaFebrero = importeAguaEnero + (importeAguaEnero * 2.8)/100

    console.log(importeAguaEnero);

    console.log(importeAguaFebrero);

    /**************** ***************/

    /* operador ternario tiene lo siguiente 
    
        1 - se usa siempre o generalmente para asignar valores a variables en funció
        de una condición.


    
    */

    let descuento = 0;

    let precioProducto = 98000;

    descuento = precioProducto > 150000 ? 7: 0;

    console.log(descuento);


    /* if/else => para todo. especificamente para variables continuas
    switch => cual ?. => sirve para variables discretas. asumen valores finitos y claros 
    operador ternario => para asignar valores a variables en función de una condición
    */


    

}