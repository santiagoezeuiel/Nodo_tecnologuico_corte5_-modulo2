/*
Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número.
*/



export const contarVocales = (texto) => {

    let contadorVocales = 0;
    let contadorConsonante = 0;

    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i].toLowerCase();

        if (letra >= 'a' && letra <= 'z')
        {
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u')
            {
                contadorVocales ++;
            }
            else
            {
                contadorConsonante ++;
            }
        }

    }

    return {
            vocales : contadorVocales,
            consonante : contadorConsonante
        }
}
