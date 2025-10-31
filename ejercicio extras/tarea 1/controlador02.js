/*
Realizar un programa que permita ingresar una cantidad
determinada de dias y en funcion de ellos
convertirlos los dias en segundos
*/


{

    const HORADIAS = 24;
    const MINUTOS = 60;
    const SEGUNDOS = 60


    let dias = Number(prompt(`Ingrese la cantidad de dias a calcular:`))

    function contadorHoras(dias)
    {
        
        if (!isNaN(dias))
        {
            return dias * HORADIAS;
        }
        else
        {
            return false;
        }

    }

    function contadorMinutos(dias)
    {

        if (!isNaN(dias))
        {
            return contadorHoras(dias) * MINUTOS;
        }
        else
        {
            return false;
        }
    }

    function contadorSegundo(dias)
    {
        
        if (!isNaN(dias))
        {
            return contadorMinutos(dias) * SEGUNDOS;
        }
        else
        {
            return false;
        }
    }

    let opcion = prompt(`Elija una opcion de caldulo
        1 - Cantidad de horas por dias
        2 - Cantidad de minutos por dias
        3 - Cantidad de segundos por dias`)

    let resultado;
    let titulo;

    switch(opcion)
    {
        case "1":

            resultado = contadorHoras(dias);
            titulo = `Dias ${dias} cantidad de horas ${resultado}`;
            break;
        
        case "2":

            resultado = contadorMinutos(dias);
            titulo = `Dias ${dias} cantidad de minutos ${resultado}`;
            break;

        case "3":

            resultado = contadorSegundo(dias);
            titulo = `Dias ${dias} cantidad de segundos ${resultado}`
            break;
        
        default:

            resultado = `Opcion no valida`;
            titulo = `ERROR`;

    }

    console.log(`\n` + `*`.repeat.apply(30));
    console.log(`${titulo}`);
    console.log(`El resultado ${resultado}`);
    console.log(`\n` + `*`.repeat(30));



}