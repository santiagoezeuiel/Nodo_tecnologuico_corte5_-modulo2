

/* La idea de este ejercicio
es hacer una caja super rapida
de un kiosko de barrio */

{

    let totalCobrado = 0; // aqui declaro e inicializo en cero el totalCobrado

    let contadorProductos = 0; // declaramos e inicializamos en cero.

    for(let iterador = 1;iterador <=5;iterador = iterador + 1)
    {
        let precioProducto = 0;// declaro e inicializo en cero

        precioProducto = Number(prompt(`Ingrese Precio producto ${iterador}`));

        console.log(precioProducto);

        /* esto es un "ACUMULADOR". que sería
        una variable que se acumula así misma.
        */

        totalCobrado = totalCobrado + precioProducto;

        /* esto es un "CONTADOR". que sería 
        una variable que se acumula así misma pero
        de 1 en 1. */

        contadorProductos = contadorProductos + 1;

        console.log(`SubTotal = ${totalCobrado}`);

    }

    console.log(`Total a Pagar ${totalCobrado} y Cant Productos: ${contadorProductos}`);

    /* al final deel ciclo yo ya
    conozco. la cantidad de productos
    que llevo, y el total a cobrar */

}

/*
    a => arriba (soledad ayosa)
    b => en el ciclo (chocobar)
    c => al final del ciclo (al final,amaru,nugues,lucia)
*/