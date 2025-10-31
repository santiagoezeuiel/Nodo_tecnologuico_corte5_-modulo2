/*
Realizar un programa que permita ingresar las calificaciones que obtuvo un alumno en tres
evaluaciones. Para ello permita que el alumno ingrese  las notas y obtenga la suma total de las tres notas
y el promedio de las mismas.
*/


{

    let suma = 0;   
    let nota = 0;
    const CANTIDADNOTAS = 3;
    let x = 0;

    
    function promedioNota (nota, CANTIDADNOTAS)
    {

        for (x = 1; x <= CANTIDADNOTAS; x ++)
        {
            nota = Number(prompt(`Ingrese el valoer de la nota:`));

            if (nota < 0 || nota > 10 || isNaN(nota))
            {
                console.log(`ERROR: ingrese valores enteros del 0 al 10`);
            }
            else
            {
                suma += nota;
            }
        }

        return suma / CANTIDADNOTAS;
    }


    console.log(`${promedioNota(nota, CANTIDADNOTAS)}`);

}