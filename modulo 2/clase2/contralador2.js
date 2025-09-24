
/* Variante 2:

    si la compra > 250.000 => 20% de descuento
    si no 12%

*/

{

    console.log(`aplicacion in running`);

    /* Estructura Condicion -if/else */

    /*

        a > b => si es "A" es maroy a  "b"

        A < B => si "A" es menos a "B"

        A = B => si "A" es igual a "B"

        A >= B => si "A" es mayor o igual a "B"

        A <= B => si "A" es menor o igual a "B" => 6 >= ( 3 + 3)

    */

    /*
    if(4 > 2)

        {
            //lado verdadero
        }
        else
        {
            //lado falso
        }
    */

    if (4 > 3) 
    {
        console.log("Soy verdadero");
    }
    else
    {
        console.log("Soy falso");
    }

     if (4 > (1 + 1 )) 
    {
        console.log("Soy verdadero");
    }
    else
    {
        console.log("Soy falso");
    }

     if (4 > 7) 
    {
        console.log("Soy verdadero");
    }
    else
    {
        console.log("Soy falso");
    }


    /* Prueba 6  para ver si son iguales siempre usar el triple =*/

    let importe1 = 200000;
    let importe2 = 300000;

    if (importe1 === importe2)

        {
            console.log("Son iguales");
        }
        else
        {
            console.log("No son iguales");
        }

    /* prueba 7 */

    let totalCompra1 = 200000;
    let totalCompra2 ="200000";

    if (totalCompra1 == totalCompra2)
    {
        console.log("Son iguales pero no por tipo de dato");
    }
    else
    {
        console.log("No son iguales");
    }
}