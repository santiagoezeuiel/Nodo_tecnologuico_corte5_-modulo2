
/* aqui realice una arrow function
que recibe como parametro el importe base
y devuelve el IVA que sería el 21% del 
importe base */

export const fnRetorneIVA = (importeBase)=>
    {
        return (importeBase * 21/100);
    }

/* que se puede incluir dentro de un módulo ?. 
*/

export const versionDelSistema = "V1.31.10.2025";

/* 

    - naturalmente se exportan funciones clasicas
    - se exportan funciones como arrow function dentro de constantes
    - se exportan constantes

    - se exportan
        * objeto literales
        * vectores o arrays

*/



/* aqui estoy creando una función clásica
y poniendole la palabra export default
porque será la exportación por defecto */

export default function cuadrado(numero)
{
    return numero * numero;
}