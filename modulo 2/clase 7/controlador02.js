{
    /* (01) - For 
    
    Estructura repetitiva que esta
    diseñada para ciclos donde sabemos
    el principio y conocemos el final.
    */

    /* quiero registrar la cantidad 
    de productos caros que compra una
    persona en esta caja especial.
    y define que un producto caro
    es aquel que cueste mas de 50.000,00
    pesos */


    /* 
        variables son lugares de almacenamiento
        en la memoria de la PC. que pueden
        cambiar de valor => variable

        constante es un lugar de almacenamiento
        en la memoria de la PC. que no puede cambiar
        de valor */


    // creo la constante e inmediatamente le asigno el valor //
    
    const TOPE = 50000; // aqui estoy definiendo el tope que determina cuando un producto es caro o no ?.
      
    let precioProducto = 0; // declaro e inicializo en cero.

    let acumulador = 0; // declaro una variable que es acumuladora

    let cantidadProductosCaros = 0;
    let cantidadProductosNoCaros = 0;

    for(let iterador = 1;iterador <= 4;iterador = iterador + 1)
    {
        console.log(`Esta instrucción se repite la vez número ${iterador}`);

        // leyendo el precio del producto desde el teclado //
        precioProducto = Number(prompt(`Ing. Precio Producto ${iterador}`));

        if(precioProducto > TOPE)
        {
            // un contador es una variable que se incrementa de una en una asi misma //
            cantidadProductosCaros = cantidadProductosCaros + 1;
        }
        else
        {
            cantidadProductosNoCaros = cantidadProductosNoCaros + 1;
        }

        console.log(precioProducto);

        // aqui vamos a ir acumulando los precios //

        acumulador = acumulador + precioProducto;

        console.log(acumulador);

    }

    console.log(`Total de la Venta ${acumulador} CPC: ${cantidadProductosCaros} y CPNC: ${cantidadProductosNoCaros}`);

}