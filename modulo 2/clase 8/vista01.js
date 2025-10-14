
/* 
ciclo while

*/

{
    console.log(`aplication is running`);

    // aqui estoy declarando e inicializando una variable en SI */
    let continuaProcesando = 'SI';

    let contador = 0; // declaro e inicializo una variable

    while(continuaProcesando==='SI')
    {     
        // aqui voy contando las personas que van ingresando
        contador = contador + 1;

        // aqui voy mostrando la cantidad de personas que voy registrando
        console.log(`Ingreso la persona Nro. ${contador}`);

        /* siempre antes de terminar el ciclo. debo preguntar si
        el operador desea salir del ciclo. porque sino pregunto
        entraría en el famoso bucle infinito. */

        continuaProcesando = prompt(`Desea continuar (SI = Continua / NO = Cancela)`);       

    }

}

/* 
    for(let iterador = 0; i <= 10; iterador = iterador + 1)
    {

    }


*/


/* 

    - Diplomatura en programación Web - full Stack

    - Tecnicatura en programación Web - full Stack

    - Licenciatura

    - Ingenieria
*/