/*
Realizar un programa que permita ingresar las calificaciones que obtuvoo un alumno en tres evaluaciones.
para ello permia qeu el alumno ingrese las notas y obtenga la suma total de las tres notas
y el promedio de las mismas 
*/

export const sumarNotas = (notas) => {
    
    let suma = 0; 
    let contador = 0;
    

    let i = 0;

    while (i < notas.length)
    {
        suma = suma + notas[i];
        contador ++;
        i++;
    }

    if (contador === 0)
    {
        return { suma: 0, promedio: 0 };
    }

    let promedio = suma / contador;
    
    return{
        promedio : promedio,
        suma : suma
    } ;
}