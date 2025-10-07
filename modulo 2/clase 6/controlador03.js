
/* 
    La Justicia Electoral, desea 
    tener una especie de contabilización
    de la cantidad de personas que
    están asistiendo a emitir su sufragio.

    - la cantidad total de personas que van votando
    - la edad promedio de todas las personas

    -Grupo A: (16 años hasta 30 años)
        - cantidad de personas
        - edad promedio

    -Grupo B: (Personas Edad mayor a 30 años)
        - cantidad de personas
        - edad promedio

*/

/* 
    1 - 44 años => B
    2 - 56 años => B
    3 - 25 años => A
    4 - 68 años => B


*/

{

    let edadTotal = 0; // acumulador de edad de todos
    let contadorTotal = 0; // contador de personas
    let promedioTotal = 0; // promedio de edad de todas las personas

    let edadTotalGrupoA = 0;
    let cantidadGrupoA = 0;
    let promedioGrupoA = 0;

    let edadTotalGrupoB = 0;
    let cantidadGrupoB = 0;
    let promedioGrupoB = 0;

    for(let i=1;i <= 7;i=i+1)
    {
        let edad = 0; // declaro e inicializo una variable en cero

        edad = Number(prompt(`Ing. la Edad Persona ${i}`));

        if(edad >= 16) // si cumple la condición lo registro.
        {
            console.log(edad);

            // acumular la edad de todas las personas //
            edadTotal = edadTotal + edad;

            // vamos a ir registrando las cantidades //
            contadorTotal = contadorTotal + 1;

            console.log(`Edad Acumulada: ${edadTotal} Cantidad: ${contadorTotal}`);

            if(edad <= 30) // grupo A
            {
                edadTotalGrupoA = edadTotalGrupoA + edad; // acumulo
                cantidadGrupoA = cantidadGrupoA + 1; // cuento     
            } 
            else // grupo B
            {
                edadTotalGrupoB = edadTotalGrupoB + edad; // acumulo
                cantidadGrupoB = cantidadGrupoB + 1; // cuento
            }

        }
    }

    /* cuando salgo del ciclo repetitivo 
    esas dos variables vienen ya con los totales
    y cantidades de a fuera del ciclo */


    /* 
    
        NO SE PUEDE DIVIDIR POR CERO

        Numerador / Denominador => el Denominador no puede ser CERO.
    
    */

    promedioTotal = contadorTotal !== 0 ? edadTotal / contadorTotal: 0;

    promedioGrupoA = cantidadGrupoA !==0 ? edadTotalGrupoA / cantidadGrupoA: 0;

    promedioGrupoB = cantidadGrupoB !==0 ? edadTotalGrupoB / cantidadGrupoB: 0;
    
    console.log(`Cantidad Total: ${contadorTotal} Edad Acumulada: ${edadTotal} y Promedio: ${promedioTotal}`);

    console.log(`Promedio A: ${promedioGrupoA}`);

    console.log(`Promedio B: ${promedioGrupoB}`);

}

/* 
    1 => 2024 => interes
    2 => 2024 => interes
    3 => 2025 => interes
    4 => 2025 => interes
    5 => 2025 => 0


    SUCESION DE CÁLCULOS.

    calculo1

    calculo2

    calculo3

    indeterminación

    calculo 5

    calculo 6

    ...

    Nan => not a number

    undefined => 

*/