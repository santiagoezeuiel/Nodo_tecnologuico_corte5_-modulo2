
/*
Un comercio nesecita realizar un proceso de caulculo del precio
de centa a  50.000 pesos, el precio
de venta tendra un margen de ganancia del 70 %
caso contrario, tendria un margen del 95%
*/


{
    console.log(`El controlador esta funcionando`)

    let precioCosto = 0;
    let precioDeVenta = 0;

    precioCosto = Number(prompt(`Ingrese el precio de costo`))

    console.log(precioCosto)

    //operador ternario
    precioDeVenta = precioCosto < 50000 ? precioCosto + (precioCosto * 70 / 100) : precioCosto + (precioCosto * 95 / 100)

    /*
    El operador ternario, es un condicional simple,
    por que  analiza una condicion de seguramente tiene un caculo
    por lado verdadero y tiene un calculo o exprecion por lado falso
    */

    /*
    if (precioCosto < 50000)
    {
        precioDeVenta = precioCosto + (precioCosto * 70 / 100)
    }
    else
    {
        precioDeVenta = precioCosto + (precioCosto * 95 / 100)
    }
    */
    console.log(`Precio de costo $${precioCosto} precio dde venta: $${precioDeVenta}`)
    
}