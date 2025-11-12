/*
Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).
*/


export const contadorEspacios = (texto) => {
    let contadorEspacio = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ")
        {  
            contadorEspacio++;
        }

        if (contadorEspacio === 3) 
        {
            return true;  
        }
    }

    return false; 
};