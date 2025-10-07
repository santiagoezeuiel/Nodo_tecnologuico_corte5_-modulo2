

/*
Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son: Catálogo de Productos Codigo Descripción x unidad (cantidad >= 5) y (cantidad <=10) Cantidad >= 11
1
Dogui x 21 kil.
$ 38.000,00
$ 36.000,00
$ 34.000,00
2
Tiernitos x 21 kil
$ 31.000,00
$ 29.000,00
$ 27.000,00
3
Dogpro x 21 kil
$ 46.000,00
$ 44.000,00
$ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar.
*/


    let codigo = Number(prompt(`Ingrese el codigo del producto (1=Dogui x 21kg, 2=Tiernitos x 21kg, 3=Dogpro x )`))
    let cantidadProducto = Number(prompt(`Cantidad de producto`));


    switch(codigo)
    {
        case 1:
            {
                if (cantidadProducto <= 4)
                {
                    console.log(`Total a pagar $${cantidadProducto * 38000}`)
                }
                else if (cantidad <= 10)
                {
                    console.log(`Total a pagar $${cantidadProducto * 36000}`)
                }
                else
                {
                    console.log(`Total a pagar $${cantidadProducto * 34000}`)
                }
            }
            break;
        case 2:
            {
                if (cantidadProducto <= 4)
                {
                    console.log(`Total a pagar $${cantidadProducto * 31000}`)
                }
                else if (cantidadProducto <= 10)
                {
                    console.log(`Total a pagar $${cantidadProducto * 29000}`)
                }
                else
                {
                    console.log(`total a pagar $${cantidadProducto * 27000}`)
                }
            }
            break;
        case 3:
            {
             if (cantidadProducto <= 4)
            {
                console.log(`Total a apgar $${cantidadProducto * 46000}`)
            }
            else if (cantidadProducto <= 10)
            {
                console.log(`Total a pagar $${cantidadProducto * 44000}`)
            }
            else
            {
                console.log(`Total a pagar $${cantidadProducto * 42000}`)
            }   
            }
            break;
        default:
        {
            console.log(`El codigo no encontrado`);
        }
        break;
    } 