
/* Vamos a crear
una función. que reciba como parametro
una cadena de texto, la analice y diga
cuantas vocales tiene 

    - cuando exporto por defecto una
    función clásica. se puede poner
    directamente la palabra 

    export default function blabla(){}

    - cuando exporto una arrow function
    que está guardada dentro de una constante

        1ro) declaro la función dentro de la constante

        2do) exporto por defecto la constante 
        que tiene la arrow function

*/

const fnCantidadVocales = (texto)=>
    {
        let cantidadVocales = 0;
        for(let i = 0; i < texto.length;i++)
        {
            // recorrido se produce aqui dentro //

            // extraigo el caracter que está en la posición "i" //
            let caracter = texto[i]; 

            console.log(caracter);
            
            console.log(caracter.toUpperCase());

            if((caracter.toUpperCase() === 'A') || (caracter.toUpperCase() === 'E') || (caracter.toUpperCase() === 'I')||(caracter.toUpperCase() === 'O')||(caracter.toUpperCase() === 'U'))
            {
                cantidadVocales++;
            }
        }
        
        return cantidadVocales;
        
    }

export default fnCantidadVocales;

