/* 
Realizar un programa que permita el ingreso de 2 números (A Y B) utilizando las variables y
realice las siguientes operaciones.

    1 - Mostar la suma de ambos ( A + B)
    2 - Mostar la resta (A - B)
    3 - Mostar el producto de ambos (A * B)
    4 - Mostar el cociente entre ambos (A / B)

El ultimo caso, verificar que sicede cuando B es igual a cero Que sucede con el programa ¿?
*/

{
    let numero1 = Number(prompt(`Ingrese cualquier un número`));
    let numero2 = Number(prompt(`Ingres otro numero`));

    function resultadoSuma (numero1, numero2)
    {
        
        if ((!isNaN(numero1)  && !isNaN(numero2)))
        {
            return numero1 + numero2;
        }
        else
        {
            return false;
        }
        
    }

    function resultadoResta (numero1, numero2)
    {

        if ((!isNaN(numero1) && !isNaN(numero2)))
        {
            return numero1 - numero2;
        }
        else
        {
            return false;
        }

        
    }

    function resultadoMultiplicacion(numero1, numero2)
    {
        let multiplicacion = numero1 * numero2;

        return multiplicacion;
    }

    function resultadoCociente(numero1, numero2)
    {

        if (numero2 === 0)
        {
            return false;
        }
        else
        {
            return  numero1 / numero2;
        }

    }

 
    let opcion = prompt(`Elija una opcion
        1 - Suma
        2 - Restas
        3 - Multiplicacion
        4 - Divicion`)

    let resultado;
    let titulo;

    switch (opcion){

        case "1":
            resultado = resultadoSuma(numero1, numero2);
            titulo = "Resultado suma:";
            break;
        
        case "2":
            resultado = resultadoResta(numero1, numero2);
            titulo = "Resultado resta:";
            break;

        case "3":
            resultado = resultadoMultiplicacion(numero1, numero2);
            titulo = "Resultado multiplicación:";
            break;
        
        case "4":
            resultado = resultadoCociente(numero1, numero2);
            titulo = "Resultado cociente:";
            break;
        
        default:
            resultado = `Opcion no válida`;
            titulo = "ERROR";
    }


    
    console.log(`\n` + "=".repeat(30));
    console.log(`Resultado de ${titulo}`);
    console.log("*".repeat(30));
    console.log(resultado);
    
}