
function cuadrado(numero)
{
    return (numero * numero);
}

/* es que a partir del año 2015 en 
adelante. salieron las arrow function 
y se permite crear funciones y guardarlas
en variables o constantes.
*/

/* La arrow function tiene esta forma
de definición
    ()=>{}

    () -> aqui dentro parametros de entrada
    => la flecha
    {} -> el cuerpo de la función

*/

/* las funciones flecha o arrow function
se pueden almacenar dentro de variables
o constantes. generalmente van dentro
de constantes. o pueden ser funciones
anonimas. 
El nombre que tiene la función es
la de la constante que la contiene.
*/

const cuadrado2 = (numero)=>
    {
        return numero * numero;
    };

/* Esta arrow function recibe
como parametros de entrada la base
y la altura y calcula la superficie. */

const superficie = (base,altura)=>
    {
        return (base * altura);
    }




/* si tiene la palabra return 
quiere decir que la función 
devuelve un resultado y que
a ese resultado puedo guardarlo 
en una variable o constante */

{


    /* pueden ser comentarios
    que un usuario puso
        - red social
        - en un formulario de inscripción de algo
        - 
    */

    /* funcionalidades y particularidades
    del manejo de cadenas */

    let textoGeneral = `Soy Daaaaaniel y soy hinchaaaaa de AA BOCA`;

    let largoDeCadena = textoGeneral.length;

    console.log(`El largo de la cadena es: ${largoDeCadena}`);
    
    /* extraer caracter x caracter
    de forma manual. 
    Esto no se puede hacer con una cadena muy larga.
    */

    let caracter0 = textoGeneral.charAt(0);
    let caracter5 = textoGeneral.charAt(5);
    let caracter9 = textoGeneral.charAt(9);
    let caracter15 = textoGeneral.charAt(15);

    console.log(caracter0);
    console.log(caracter5);
    console.log(caracter9);
    console.log(caracter15);

    let contadorLetrasA = 0;

    let contA = 0;

    for(let indice=0; indice < largoDeCadena;indice=indice+1)
    {
        /* 1ro. Extraigo el caracter */
      //  let caracter = textoGeneral.charAt(indice);

        contA = textoGeneral[indice]==='A' || textoGeneral[indice]==='a' ? contA + 1: contA;


        let caracter = textoGeneral[indice];

        /* 2do. Muestro el caracter extraido */
        console.log(`Car. posicion ${indice} - ${caracter}`);

        /* 3ro. Vamos a preguntar si es una letra A ó a */
        if((caracter === 'A') || (caracter === 'a'))
        {
            contadorLetrasA = contadorLetrasA + 1;
        }
    }

    console.log(`Esta cadena tiene ${contadorLetrasA}`);

    console.log(`Esta cadena tiene ${contA}`);

}