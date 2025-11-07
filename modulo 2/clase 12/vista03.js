
/* Manejo de Cadenas o 
Strings => flags o banderas => valores
boolean */
{
    let frase = `soy daniel hincha del mas grande de CATEGORIA AAAAAA NEVER B CATEGORY`;

    console.log(frase);

    // esta propiedad me devuelve el largo de la cadena //
    console.log(frase.length);

    // puedo analizar y extraer caracter x caracter //

    // extraigo el caracter que esta en la posicion 0 y lo guardo en una variable */
    let caracter0 = frase.charAt(0); 
    console.log(caracter0);

    let caracter1 = frase.charAt(1);
    console.log(caracter1);

    // como hacemos un recorrido //

    let contadorA = 0;

    for(let indice = 0;indice < frase.length;indice = indice + 1)
    {
        let caracterExtraido = frase[indice];

        console.log(`posicion: ${indice} - caracter: ${caracterExtraido}`);

        if((caracterExtraido === 'A') || (caracterExtraido === 'a'))
        {
            contadorA = contadorA + 1;
        }

    }

    console.log(contadorA);

}

/* ABSTRACCIÓN: 
    - capacidad de imaginarme cosas
    que las tengo en la mente y las voy
    a terminar materializando en la vida real.

    1) comprensión conceptual de 
    estructuras de datos lineales.

    2) crear funciones que analicen
    estructuras lineas y devuelvan valores
    booleanos en caso de encontrar coincidencias



*/
